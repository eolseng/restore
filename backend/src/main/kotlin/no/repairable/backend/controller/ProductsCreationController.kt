package no.repairable.backend.controller


import no.repairable.backend.entity.*
import no.repairable.backend.repository.*
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.HttpStatus
import org.springframework.web.bind.annotation.*


/**
 * Handles creation of products in the products database using POST request on endpoint api/insert
 * */
@RestController
@RequestMapping("api/insert")
class ProductsCreationController @Autowired constructor(
        private val productRepository: ProductRepository,
        private val genderRepository: GenderRepository,
        private val brandRepository: BrandRepository,
        private val categoryRepository: CategoryRepository,
        private val subCategoryRepository: SubCategoryRepository,
        private val colorRepository: ColorRepository,
        private val imageRepository: ImageRepository,
        private val sizeRepository: SizeRepository,
        private val baseColorRepository: BaseColorRepository

) {

    val genders: HashMap<String, Gender> = HashMap()
    val brands: HashMap<String, Brand> = HashMap()
    val categories: HashMap<String, Category> = HashMap()
    val subCategories: HashMap<String, SubCategory> = HashMap()
    val colors: HashMap<String, Color> = HashMap()
    val images: HashMap<String, Image> = HashMap()
    val productsMap: HashMap<String, Product> = HashMap()
    val sizeMap: HashMap<String, Size> = HashMap()
    val baseColorMap: HashMap<String, BaseColor> = HashMap()

    /**
     * method for listening to post requests on endpooint api/insert/products.
     * This method creates and saves a list of products that is later used by the customer to find the clothing they want to send to restore
     * @param products at data class corresponding to the incoming json object. This is parsed and saved on the server side database
     * @see no.repairable.backend.entity.Product
     */
    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping("/products")
    fun insertProducts(@RequestBody products: ProductsPost) {
        insertOnStartUp(products)
    }


    /**
     * The main method for parsing incoming json and then create objects containing the information supplied in the list of json objects.
     * @param products a json list containing information about all products that will be created
     */
    fun insertOnStartUp(products: ProductsPost) {

        if (baseColorMap.isEmpty()) {
            fetchBaseColors()
        }

        for (product in products.productCollection) {

            val brand = getBrand(product)

            // Skip rest if product already exists
            if (productsMap.contains(product.name))
                continue
            val gender = getGender(product)
            val category = getCategory(product)
            val subCategory = getSubCategory(product)


            val newProduct = Product(
                    name = product.name,
                    description = product.description,
                    brand = brand,
                    category = category,
                    subCategory = subCategory,
                    gender = gender
            )
            productsMap[product.name] = newProduct
            createColorsAndImages(product, newProduct)
            getSizes(product, newProduct)
        }
        sizeRepository.saveAll(sizeMap.values)
        productRepository.saveAll(productsMap.values)
        colorRepository.saveAll(colors.values)
        imageRepository.saveAll(images.values)

    }

    private fun getSizes(product: ProductPostClass, newProduct: Product) {
        for (currentSize in product.sizes) {
            var size: Size? = sizeMap[currentSize]
            if (size == null) {
                size = sizeRepository.findByName(currentSize)
                if (size == null) {
                    size = Size(name = currentSize)
                }
                sizeMap[currentSize] = size
            }
            size.products.add(newProduct)
            newProduct.sizes.add(size)
        }
    }

    /**
     * Data class used when reciving json files for creating new products in the products database
     * this represents the mapping of the incoming json file
     * */
    data class ProductsPost(
            val productCollection: List<ProductPostClass>
    )

    /**
     * Data class used when reciving json files for creating new products in the products database
     * this represents the mapping of the incoming json file
     * */
    data class ProductPostClass(
            val category: String,
            val subCategory: String,
            val gender: String,
            val brand: String,
            val description: String,
            val name: String,
            val colorImages: List<ColorImage>,
            val sizes: List<String>
    )
    /**
     * Data class used when reciving json files for creating new products in the products database
     * this represents the mapping of the incoming json file
     * */
    data class ColorImage(
            val color: String,
            val image: String
    )

    /**
     * Method for connecting color and images for every product created. Every image object need to be associated to a color
     * the product exists in.
     * */
    private fun createColorsAndImages(product: ProductPostClass, newProduct: Product) {

        for (colorImage in product.colorImages) {
            var color = colors[colorImage.color]
            if (color == null) {
                color = colorRepository.findByBrandAndName(newProduct.brand!!, colorImage.color)
                if (color == null) {
                    val baseColor = getBaseColor(colorImage.color)
                    color = Color(name = colorImage.color, brand = newProduct.brand, baseColor = baseColor)
                }
                colors[colorImage.color] = color
            }
            color.products.add(newProduct)

            var image = images[colorImage.image]
            if (image == null) {
                image = imageRepository.findByImgUrl(colorImage.image)
                if (image == null) {
                    image = Image(imgUrl = colorImage.image, color = color, product = newProduct)
                }
                images[colorImage.image] = image
            }
        }
    }

    private fun getGender(product: ProductPostClass): Gender {
        var gender = genders[product.gender]
        if (gender == null) {
            gender = genderRepository.findByName(product.gender)
            if (gender == null) {
                gender = Gender(name = product.gender)
                genderRepository.save(gender)
            }
            genders[product.gender] = gender
        }
        return gender
    }

    private fun getBrand(product: ProductPostClass): Brand {
        var brand = brands[product.brand]
        if (brand == null) {
            brand = brandRepository.findBrandByName(product.brand)
            if (brand == null) {
                brand = Brand(name = product.brand)
                brandRepository.save(brand)
            }
            brands[product.brand] = brand
        }
        return brand
    }

    private fun getCategory(product: ProductPostClass): Category {
        var category = categories[product.category]
        if (category == null) {
            category = categoryRepository.findCategoryByName(product.category)
            if (category == null) {
                category = Category(name = product.category)
                categoryRepository.save(category)
            }
            categories[product.category] = category
        }
        return category
    }

    private fun getSubCategory(product: ProductPostClass): SubCategory {
        var subCategory = subCategories[product.subCategory]
        if (subCategory == null) {
            subCategory = subCategoryRepository.findSubCategoriesByName(product.subCategory)
            if (subCategory == null) {
                subCategory = SubCategory(name = product.subCategory)
                subCategoryRepository.save(subCategory)
            }
            subCategories[product.subCategory] = subCategory
        }
        return subCategory
    }

    private fun fetchBaseColors() {
        val baseColors = baseColorRepository.findAll()
        for (baseColor in baseColors) {
            baseColorMap[baseColor.name] = baseColor
        }
    }

    private fun getBaseColor(colorName: String): BaseColor {

        // Check if full name is a match
        var baseColor = baseColorMap[colorName]
        if (baseColor == null) {
            // Search for substrings that match a BaseColor
            val subStrings = colorName.toLowerCase().split(" ", "/")
            for (sub in subStrings) {
                if (baseColorMap.containsKey(sub)) {
                    baseColor = baseColorMap[sub]
                    break
                }
            }
        }

        if (baseColor == null) {
            println("COULD NOT FIND " + colorName)
            baseColor = baseColorRepository.findAll()[0]
        }
        return baseColor!!
    }

}
