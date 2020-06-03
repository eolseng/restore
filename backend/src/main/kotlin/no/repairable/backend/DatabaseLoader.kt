package no.repairable.backend

import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule
import com.fasterxml.jackson.module.kotlin.jacksonObjectMapper
import com.fasterxml.jackson.module.kotlin.readValue
import com.fasterxml.jackson.module.kotlin.registerKotlinModule
import no.repairable.backend.controller.ProductsCreationController
import no.repairable.backend.entity.BaseColor
import no.repairable.backend.entity.User
import no.repairable.backend.repository.BaseColorRepository
import no.repairable.backend.repository.UserRepository
import no.repairable.backend.service.UserService
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.core.io.ResourceLoader
import org.springframework.stereotype.Component
import java.io.BufferedReader
import javax.annotation.PostConstruct

@Component
class DatabaseLoader @Autowired constructor(
        private val resourceLoader: ResourceLoader,
        private val productsCreationController: ProductsCreationController,
        private val baseColorRepository: BaseColorRepository,
        private val userService: UserService
) {

    @PostConstruct
    fun onStartDataBaseLoader() {
       // insertBaseColors()
       // insertBaseProducts()
        insertUser()
    }


    /*
    private fun insertBaseColors() {
        val baseColorNames: List<String> = mutableListOf("other", "grey", "red", "blue", "navy", "white", "black", "green", "yellow", "brown", "orange", "pink", "purple", "phantom", "magnet", "micro chip", "norwegian mix", "bluebell", "nimbus cloud", "olive", "aubergine", "fire")
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
        val productsFile = resourceLoader.getResource("classpath:kotlinProducts.json")
        val content = productsFile.inputStream.bufferedReader().use(BufferedReader::readText)
        val jsonText: ProductsCreationController.ProductsPost = mapper.readValue(content)
        productsCreationController.insertOnStartUp(jsonText)
    }
    */

    private fun insertUser(){
        //Test user
        userService.createUser("foo", "bar")
    }
}