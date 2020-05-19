package no.repairable.backend

import no.repairable.backend.entity.*
import no.repairable.backend.repository.*
import org.springframework.boot.CommandLineRunner
import org.springframework.stereotype.Component

@Component
class DatabaseLoader(private val productRepository: ProductRepository,
                     private val genderRepository: GenderRepository,
                     private val sizeRepository: SizeRepository,
                     private val brandRepository: BrandRepository,
                     private val categoryRepository: CategoryRepository,
                     private val subCategoryRepository: SubCategoryRepository,
                     private val productSizeRepository: ProductSizeRepository
) : CommandLineRunner {

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
        val list = mutableListOf<Gender>().apply {
            add(Gender(genderType = 'm'))
            add(Gender(genderType = 'f'))
        }
        genderRepository.saveAll(list)
    }

    fun saveBrand(){
        val list = mutableListOf<Brand>().apply {
            add(Brand(name = "Helly Hansen"))
            add(Brand(name = "Norrøna"))
        }
        brandRepository.saveAll(list)
    }

    fun saveCategory(){
        val list = mutableListOf<Category>().apply {
            add(Category(name = "Jacket"))
            add(Category(name = "Trousers"))
        }
        categoryRepository.saveAll(list)
    }

    fun saveSubCat(){
        val list = mutableListOf<SubCategory>().apply {
            add(SubCategory(name = "Skiing"))
            add(SubCategory(name = "Raining"))
        }
        subCategoryRepository.saveAll(list)
    }

    fun saveSize() {
        val list = mutableListOf<Size>().apply {
            add(Size(size= "small"))
            add(Size(size= "medium"))
            add(Size(size= "large"))
        }
        sizeRepository.saveAll(list)
    }

    fun saveProductSize(){
        val list = mutableListOf<ProductSizes>().apply {
            add(ProductSizes(sizeId = listOf()))
        }
        productSizeRepository.saveAll(list)
    }

    fun saveProducts() {
        val list = mutableListOf<Product>().apply {
            add(Product(name = "Skagen", description = "Jacket", gender = Gender(id = 1)))
        }
        productRepository.saveAll(list)
    }
}