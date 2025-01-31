package no.repairable.backend.controller

import com.fasterxml.jackson.databind.ObjectMapper
import com.google.gson.Gson
import com.google.gson.JsonObject
import no.repairable.backend.repository.ProductRepository
import org.junit.jupiter.api.BeforeEach
import org.junit.jupiter.api.Test
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.autoconfigure.restdocs.AutoConfigureRestDocs
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.http.MediaType
import org.springframework.test.annotation.DirtiesContext
import org.springframework.test.context.ActiveProfiles
import org.springframework.test.web.servlet.MockMvc
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders
import org.springframework.test.web.servlet.result.MockMvcResultMatchers.status


@SpringBootTest
@ActiveProfiles("test")
@AutoConfigureRestDocs
@AutoConfigureMockMvc
@DirtiesContext(classMode = DirtiesContext.ClassMode.AFTER_EACH_TEST_METHOD)
class ProductsCreationControllerTest @Autowired constructor(
        val mockMvc: MockMvc,
        val productRepository: ProductRepository
) {

    @Autowired
    lateinit var objectMapper: ObjectMapper

    lateinit var jsonList: ProductsCreationController.ProductsPost

    @BeforeEach
    fun initTestObjects() {
        val imageJson = ProductsCreationController.ColorImage(color = "blue", image = "url.com")
        val imageList = mutableListOf<ProductsCreationController.ColorImage>()
        imageList.add(imageJson)
        val sizes = listOf("s", "m", "l")
        val jsonObject = ProductsCreationController.ProductPostClass(brand = "Levis", name = "Test_garment1", category = "jeans", subCategory = "skinnyFit", colorImages = imageList, sizes = sizes, gender = "male", description = "skinny fit jeans")
        val jsonObject1 = ProductsCreationController.ProductPostClass(brand = "Helly Hansen", name = "Test_garment2", category = "jakker", subCategory = "Seilejakke", colorImages = imageList, sizes = sizes, gender = "female", description = "lett seiljakke til de korte turene")
        val productList = mutableListOf(jsonObject, jsonObject1)

        jsonList = ProductsCreationController.ProductsPost(productCollection = productList)

    }

    @Test
    fun `try POST without body on product creation endpoint`() {
        mockMvc.perform(MockMvcRequestBuilders.post("/api/insert/products"))
                .andExpect(status().isBadRequest)
    }

    @Test
    fun `check if inserted values are correct`() {
        val currentSize = productRepository.findAll().size

        mockMvc.perform(MockMvcRequestBuilders.post("/api/insert/products")
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(jsonList)))
                .andExpect(status().isCreated)

        val sizeAfterInsertion = productRepository.findAll().size

        assert(sizeAfterInsertion == currentSize + jsonList.productCollection.size)

        val url = "/api/products?size=${currentSize + jsonList.productCollection.size + 10}"
        val result = mockMvc.perform(MockMvcRequestBuilders.get(url))
                .andExpect(status().isOk)
                .andReturn()

        val content = result.response.contentAsString

        val convertedObject = Gson()
                .fromJson(content, JsonObject::class.java)["_embedded"]
                .asJsonObject["products"]
                .asJsonArray
        assert(sizeAfterInsertion == convertedObject.size())

    }
}