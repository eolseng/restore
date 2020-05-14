package no.repairable

import no.repairable.entity.Gender
import no.repairable.entity.Product
import no.repairable.repository.GenderRepository
import no.repairable.repository.ProductRepository
import org.springframework.boot.CommandLineRunner
import org.springframework.stereotype.Component

@Component
class DatabaseLoader(private val productRepository: ProductRepository,
                     private val genderRepository: GenderRepository
) : CommandLineRunner {

    override fun run(vararg args: String?) {
        saveProducts()
        saveGender()
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
}