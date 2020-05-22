package no.repairable.backend.controller

import no.repairable.backend.entity.*
import no.repairable.backend.repository.*
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.data.rest.webmvc.RepositoryRestController
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody


@RepositoryRestController
class ProductsCreationController @Autowired constructor(
        private val productRepository: ProductRepository,
        private val genderRepository: GenderRepository,
        private val brandRepository: BrandRepository,
        private val categoryRepository: CategoryRepository,
        private val subCategoryRepository: SubCategoryRepository
) {

    val genders: HashMap<String, Gender> = HashMap()
    val brands: HashMap<String, Brand> = HashMap()
    val categories: HashMap<String, Category> = HashMap()
    val subCategories: HashMap<String, SubCategory> = HashMap()

    @PostMapping("/api/products")
    private fun insertProducts(@RequestBody products: List<ProductPostClass>) {

        val productList = mutableListOf<Product>()

        for (product in products) {

            val brand = getBrand(product)
            // Skip rest if product already exists
            if (productRepository.existsByBrandAndName(brand, product.name)) continue
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
            productList.add(newProduct)
        }
        productRepository.saveAll(productList)
    }

    data class ProductPostClass(
            val name: String,
            val description: String,
            val gender: String,
            val brand: String,
            val category: String,
            val subCategory: String
    )

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
