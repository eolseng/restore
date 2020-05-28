package no.repairable.backend

import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule
import com.fasterxml.jackson.module.kotlin.jacksonObjectMapper
import com.fasterxml.jackson.module.kotlin.readValue
import com.fasterxml.jackson.module.kotlin.registerKotlinModule
import no.repairable.backend.controller.ProductsCreationController
import no.repairable.backend.entity.BaseColor
import no.repairable.backend.repository.BaseColorRepository
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Component
import java.io.File
import javax.annotation.PostConstruct

@Component
class DatabaseLoader @Autowired constructor(
        private val productsCreationController: ProductsCreationController,
        private val baseColorRepository: BaseColorRepository
) {
    @PostConstruct
    fun onStartDataBaseLoader() {
        insertBaseColors()
        insertBaseProducts()
    }

    private fun insertBaseColors() {
        val baseColorNames: List<String> = mutableListOf("other", "red", "blue", "navy", "white", "black", "green", "yellow", "brown", "orange", "pink", "purple", "phantom", "magnet", "micro chip", "norwegian mix", "bluebell", "nimbus cloud", "olive", "aubergine", "fire")
        val baseColors = mutableListOf<BaseColor>()
        for (name in baseColorNames) {
            val baseColor = BaseColor(name = name)
            baseColors.add(baseColor)
        }
        baseColorRepository.saveAll(baseColors)
    }

    private fun insertBaseProducts() {
        val mapper = jacksonObjectMapper()
        mapper.registerKotlinModule()

        mapper.registerModule(JavaTimeModule())
        val jsonString: String = File("../backend/src/main/resources/kotlinProducts.json").readText(Charsets.UTF_8)
        val jsonText: ProductsCreationController.ProductsPost = mapper.readValue(jsonString)
        productsCreationController.insertOnStartUp(jsonText)
    }
}