package no.repairable.backend.controller


import org.springframework.beans.factory.annotation.Value
import com.google.cloud.storage.StorageOptions

import no.repairable.backend.entity.*
import no.repairable.backend.repository.*
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.core.io.Resource
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
        private val imageRepository: ImageRepository
) {

    val genders: HashMap<String, Gender> = HashMap()
    val brands: HashMap<String, Brand> = HashMap()
    val categories: HashMap<String, Category> = HashMap()
    val subCategories: HashMap<String, SubCategory> = HashMap()
    val colors: HashMap<String, Color> = HashMap()
    val images: HashMap<String, Image> = HashMap()

    @Value("gs://spring-bucket-trulsistre/my-file.txt")
    lateinit var gcsFile: Resource

    @PostMapping("/products")
    fun insertProducts(@RequestBody products: ProductsPost) {

        val productList = mutableListOf<Product>()


        val storage = StorageOptions.getDefaultInstance().service

        for (product in products.productCollection) {

            val brand = getBrand(product)

            // Skip rest if product already exists
            if (productRepository.existsByBrandAndName(brand, product.name)) continue
            val gender = getGender(product)
            val category = getCategory(product)
            val subCategory = getSubCategory(product)
            val color = getColor(product, brand)
            val image = getImage(product)
            val newProduct = Product(
                    name = product.name,
                    description = product.description,
                    brand = brand,
                    category = category,
                    subCategory = subCategory,
                    gender = gender,
                    color = color,
                    image = image
            )

            productList.add(newProduct)
        }
        productRepository.saveAll(productList)
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
            val color: String,
            val image: String
    )

    private fun getImage(product: ProductPostClass): Image {
        var image = images[product.image]
        if (image == null) {
            image = imageRepository.findByImgUrl(product.image)
            if (image == null) {
                image = Image(imgUrl = product.image)
                imageRepository.save(image)
            }
            images[product.color] = image
        }
        return image
    }

    private fun getColor(product: ProductPostClass, brand: Brand): Color {
        var color = colors[product.color]
        if (color == null) {
            color = colorRepository.findByBrandAndName(brand, product.name)
            if (color == null) {
                color = Color(name = product.color, brand = brand)
                colorRepository.save(color)
            }
            colors[product.color] = color
        }
        return color
    }

    private fun getGender(product: ProductPostClass): Gender {
        var gender = genders[product.gender]
        if (gender == null) {
            gender = genderRepository.findGenderByGenderType(product.gender)
            if (gender == null) {
                gender = Gender(genderType = product.gender)
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
