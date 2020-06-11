package no.repairable.backend

import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule
import com.fasterxml.jackson.module.kotlin.jacksonObjectMapper
import com.fasterxml.jackson.module.kotlin.readValue
import com.fasterxml.jackson.module.kotlin.registerKotlinModule
import no.repairable.backend.controller.ProductsCreationController
import no.repairable.backend.entity.BaseColor
import no.repairable.backend.repository.BaseColorRepository
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.CommandLineRunner
import org.springframework.context.annotation.Profile
import org.springframework.core.annotation.Order
import org.springframework.core.io.ResourceLoader
import org.springframework.stereotype.Component
import java.io.BufferedReader


/***
 * Inserts products scraped from swix.no
 * This class is only used for population the data base for demonstration in the development environment
 */
@Profile("dev")
@Order(2)
@Component
class DevProductsLoader @Autowired constructor(
        private val resourceLoader: ResourceLoader,
        private val productsCreationController: ProductsCreationController,
        private val baseColorRepository: BaseColorRepository
) : CommandLineRunner {

    override fun run(vararg args: String?) {
        insertSwixBaseColors()
        insertBaseProducts()
    }

    private fun insertSwixBaseColors() {
        val baseColorNames: List<String> = mutableListOf("phantom", "magnet", "micro chip", "norwegian mix", "bluebell", "nimbus cloud", "olive", "aubergine", "fire")
        val baseColors = mutableListOf<BaseColor>()
        for (name in baseColorNames) {
            val baseColor = BaseColor(name = name)
            baseColors.add(baseColor)
        }
        baseColorRepository.saveAll(baseColors)
    }

    private fun insertBaseProducts() {
        val mapper = jacksonObjectMapper()
                .registerKotlinModule()
                .registerModule(JavaTimeModule())
        val productsFile = resourceLoader.getResource("classpath:SwixProducts.json")
        val content = productsFile.inputStream.bufferedReader().use(BufferedReader::readText)
        val jsonText: ProductsCreationController.ProductsPost = mapper.readValue(content)
        productsCreationController.insertOnStartUp(jsonText)
    }

}