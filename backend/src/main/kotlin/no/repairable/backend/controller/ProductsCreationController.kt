package no.repairable.backend.controller


import no.repairable.backend.entity.*
import no.repairable.backend.repository.*
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController


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
        private val sizeRepository: SizeRepository

) {

    val genders: HashMap<String, Gender> = HashMap()
    val brands: HashMap<String, Brand> = HashMap()
    val categories: HashMap<String, Category> = HashMap()
    val subCategories: HashMap<String, SubCategory> = HashMap()
    val colors: HashMap<String, Color> = HashMap()
    val images: HashMap<String, Image> = HashMap()
    val productsMap: HashMap<String, Product> = HashMap()
    val sizeMap: HashMap<String, Size> = HashMap()

    @PostMapping("/products")
    fun insertProducts(@RequestBody products: ProductsPost) {
        insertOnStartUp(products)
    }

    fun insertOnStartUp(products: ProductsPost) {

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

    data class ProductsPost(
            val productCollection: List<ProductPostClass>
    )


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

    data class ColorImage(
            val color: String,
            val image: String
    )

    private fun createColorsAndImages(product: ProductPostClass, newProduct: Product) {

        for (colorImage in product.colorImages) {
            var color = colors[colorImage.color]
            if (color == null) {
                color = colorRepository.findByBrandAndName(newProduct.brand!!, colorImage.color)
                if (color == null) {
                    color = Color(name = colorImage.color, brand = newProduct.brand)
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
}
