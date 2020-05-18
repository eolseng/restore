package no.repairable.backend

import no.repairable.backend.entity.Gender
import no.repairable.backend.entity.Product
import no.repairable.backend.entity.ProductSizes
import no.repairable.backend.entity.Size
import no.repairable.backend.repository.GenderRepository
import no.repairable.backend.repository.ProductRepository
import no.repairable.backend.repository.SizeRepository
import org.springframework.boot.CommandLineRunner
import org.springframework.stereotype.Component

@Component
class DatabaseLoader(private val productRepository: ProductRepository,
                     private val genderRepository: GenderRepository,
                     private val sizeRepository: SizeRepository
) : CommandLineRunner {

    override fun run(vararg args: String?) {
        saveGender()
        saveProducts()
    }

    fun saveProducts() {
        val list = mutableListOf<Product>().apply {
            add(Product(name = "Skagen", description = "Jacket", gender = Gender(id = 1), productSizesProd = ProductSizes(id = 1)))
            //add(Product(name = "Shirt"))
            //add(Product(name = "Pants"))
           // add(Product(name = "Socks"))
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

    fun saveProductSize() {
        val list = mutableListOf<Gender>().apply {
            add(Gender(gender = 'm'))
            add(Gender(gender = 'f'))
        }
        genderRepository.saveAll(list)
    }

    fun saveSize() {
        val list = mutableListOf<Size>().apply {
            add(Size(size= "small"))
            add(Size(size= "medium"))
            add(Size(size= "large"))
        }
        sizeRepository.saveAll(list)
    }
}