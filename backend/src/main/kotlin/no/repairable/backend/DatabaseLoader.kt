package no.repairable.backend

import no.repairable.backend.entity.Category
import no.repairable.backend.entity.Gender
import no.repairable.backend.entity.Product
import no.repairable.backend.repository.CategoryRepository
import no.repairable.backend.repository.GenderRepository
import no.repairable.backend.repository.ProductRepository
import org.springframework.boot.CommandLineRunner
import org.springframework.stereotype.Component

@Component
class DatabaseLoader(private val productRepository: ProductRepository,
                     private val genderRepository: GenderRepository,
                     private val categoryRepository: CategoryRepository
) : CommandLineRunner {

    override fun run(vararg args: String?) {
        saveProducts()
        saveGender()
        saveCategory()
    }

    fun saveProducts() {
        val list = mutableListOf<Product>().apply {
            add(Product(name = "Jacket"))
            add(Product(name = "Shirt"))
            add(Product(name = "Pants"))
            add(Product(name = "Socks"))
        }
        productRepository.saveAll(list)
    }

    fun saveGender() {
        val list = mutableListOf<Gender>().apply {
            add(Gender(gender = 'm'))
            add(Gender(gender = 'f'))
        }
        genderRepository.saveAll(list)
    }

    fun saveCategory() {
        var ctg0 = Category()
        ctg0.name = "Pants";
        categoryRepository.save(ctg0);

    }
}