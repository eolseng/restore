package no.repairable.backend

import no.repairable.backend.entity.*
import no.repairable.backend.repository.*
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.CommandLineRunner
import org.springframework.stereotype.Component

@Component
class DatabaseLoader @Autowired constructor(
        private val productRepository: ProductRepository,
        private val genderRepository: GenderRepository,
        private val sizeRepository: SizeRepository,
        private val brandRepository: BrandRepository,
        private val categoryRepository: CategoryRepository,
        private val subCategoryRepository: SubCategoryRepository,
        private val productSizeRepository: ProductSizeRepository
) : CommandLineRunner {

    lateinit var genders: List<Gender>
    lateinit var brands: List<Brand>
    lateinit var categories: List<Category>
    lateinit var subCategories: List<SubCategory>
    lateinit var sizes: List<Size>
    lateinit var productSizes: List<ProductSizes>
    lateinit var products: List<Product>

    override fun run(vararg args: String?) {
        saveGender()

        saveBrand()
        saveSubCat()
        saveCategory()
        saveSize()
        saveProductSize()
        saveProducts()
    }

    fun saveGender() {
        genders = mutableListOf<Gender>().apply {
            add(Gender(genderType = 'm'))
            add(Gender(genderType = 'f'))
        }

        genderRepository.saveAll(genders)
    }

    fun saveBrand() {
        brands = mutableListOf<Brand>().apply {
            add(Brand(name = "Helly Hansen"))
            add(Brand(name = "Norrøna"))
        }
        brandRepository.saveAll(brands)
    }

    fun saveCategory() {
        categories = mutableListOf<Category>().apply {
            add(Category(name = "Jacket"))
            add(Category(name = "Trousers"))
        }
        categoryRepository.saveAll(categories)
    }

    fun saveSubCat() {
        subCategories = mutableListOf<SubCategory>().apply {
            add(SubCategory(name = "Skiing"))
            add(SubCategory(name = "Raining"))
        }
        subCategoryRepository.saveAll(subCategories)
    }

    fun saveSize() {
        sizes = mutableListOf<Size>().apply {
            add(Size(size = "small"))
            add(Size(size = "medium"))
            add(Size(size = "large"))
        }
        sizeRepository.saveAll(sizes)
    }

    fun saveProductSize() {
        productSizes = mutableListOf<ProductSizes>().apply {
            add(ProductSizes(sizeId = listOf()))
        }
        productSizeRepository.saveAll(productSizes)
    }

    fun saveProducts() {
        products = mutableListOf<Product>().apply {
            add(Product(name = "Skagen", description = "Jacket", gender = genders[1], brand = brands[0], subCategory = subCategories[0], category = categories[0]))
        }
        productRepository.saveAll(products)
    }
}