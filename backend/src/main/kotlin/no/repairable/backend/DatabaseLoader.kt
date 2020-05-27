package no.repairable.backend

import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule
import com.fasterxml.jackson.module.kotlin.jacksonObjectMapper
import com.fasterxml.jackson.module.kotlin.readValue
import com.fasterxml.jackson.module.kotlin.registerKotlinModule
import no.repairable.backend.controller.ProductsCreationController
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Component
import java.io.File
import javax.annotation.PostConstruct

@Component
class DatabaseLoader @Autowired constructor(
        private val productsCreationController: ProductsCreationController
) {
    @PostConstruct
    fun onStartDataBaseLoader() {
        val mapper = jacksonObjectMapper()
        mapper.registerKotlinModule()

        mapper.registerModule(JavaTimeModule())
        val jsonString: String = File("../backend/src/main/resources/kotlinProducts.json").readText(Charsets.UTF_8)
        val jsonText: ProductsCreationController.ProductsPost = mapper.readValue(jsonString)
        productsCreationController.insertOnStartUp(jsonText)
    }
}