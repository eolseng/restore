package no.repairable.no.repairable.backend.controller

import com.fasterxml.jackson.databind.ObjectMapper
import com.google.gson.Gson
import com.google.gson.JsonObject
import no.repairable.backend.controller.OrderController
import no.repairable.backend.controller.ProductsCreationController
import no.repairable.backend.entity.ActualProduct
import no.repairable.backend.entity.Color
import no.repairable.backend.entity.Order
import no.repairable.backend.entity.User
import no.repairable.backend.repository.*
import org.junit.jupiter.api.BeforeAll
import org.junit.jupiter.api.BeforeEach
import org.junit.jupiter.api.Test
import org.junit.jupiter.api.TestInstance
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.autoconfigure.restdocs.AutoConfigureRestDocs
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.http.MediaType
import org.springframework.restdocs.mockmvc.MockMvcRestDocumentation
import org.springframework.test.context.ActiveProfiles
import org.springframework.test.context.event.annotation.BeforeTestExecution
import org.springframework.test.context.event.annotation.BeforeTestMethod
import org.springframework.test.web.servlet.MockMvc
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders
import org.springframework.test.web.servlet.result.MockMvcResultMatchers


@SpringBootTest
@ActiveProfiles("test")
@AutoConfigureRestDocs
@AutoConfigureMockMvc
@TestInstance(TestInstance.Lifecycle.PER_CLASS)
class OrderControllerTest @Autowired constructor(
        val mockMvc: MockMvc,
        val productRepository: ProductRepository,
        val userRepository: UserRepository,
        val actualProductRepository: ActualProductRepository,
        val orderRepository: OrderRepository
) {

    @Autowired
    lateinit var objectMapper: ObjectMapper
    lateinit var jsonList: ProductsCreationController.ProductsPost
    lateinit var order: OrderController.OrderDTO

    @BeforeEach
    fun initTestObjects() {

        val imageJson = ProductsCreationController.ColorImage(color = "blue", image = "url.com")
        val imageList = mutableListOf(imageJson)
        val sizes = listOf("s", "m", "l")
        val jsonObject = ProductsCreationController.ProductPostClass(brand = "Levis", name = "Test_garment1", category = "jeans", subCategory = "skinnyFit", colorImages = imageList, sizes = sizes, gender = "male", description = "skinny fit jeans")
        val jsonObject1 = ProductsCreationController.ProductPostClass(brand = "Helly Hansen", name = "Test_garment2", category = "jakker", subCategory = "Seilejakke", colorImages = imageList, sizes = sizes, gender = "female", description = "lett seiljakke til de korte turene")
        val productList = mutableListOf(jsonObject, jsonObject1)

        jsonList = ProductsCreationController.ProductsPost(productCollection = productList)

        val user = User(firstName = "E", lastName = "T", userName = "TestUser", password = "1234")
        userRepository.save(user)
        assert(user.id != null)

        mockMvc.perform(MockMvcRequestBuilders.post("/api/insert/products")
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(jsonList)))
                .andExpect(MockMvcResultMatchers.status().isCreated)

        val products = productRepository.findAll()

        val acutalP1 = OrderController.ActualProductDTO(id = products[0].id!!, size = "s", color = "blue")
        val acutalP2 = OrderController.ActualProductDTO(id = products[1].id!!, size = "m", color = "blue")
        val acutalProductList = mutableListOf(acutalP1, acutalP2)

        order = OrderController.OrderDTO(userID = user.id!!, actualProducts = acutalProductList, deliveryType = "HeltHjem")
    }

    @Test
    fun `try POST without body on product creation endpoint`() {
        mockMvc.perform(MockMvcRequestBuilders.post("/api/order"))
                .andExpect(MockMvcResultMatchers.status().isBadRequest)
    }

    @Test
    fun `checking status CREATED(201) for order endpoint`() {
        mockMvc.perform(MockMvcRequestBuilders.post("/api/order")
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(order)))
                .andExpect(MockMvcResultMatchers.status().isCreated)
                .andDo(MockMvcRestDocumentation.document("create_order"))
    }

    @Test
    fun `check if inserted values are correct`() {
        val actualRepoCurrentSize = actualProductRepository.findAll().size
        val orderRepoSizeBefore = orderRepository.findAll().size
        mockMvc.perform(MockMvcRequestBuilders.post("/api/order")
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(order)))
                .andExpect(MockMvcResultMatchers.status().isCreated)

        val actualRepoSizeAfterInsertion = actualProductRepository.findAll().size
        val orderRepoSizeAfter = orderRepository.findAll().size

        assert(actualRepoSizeAfterInsertion == actualRepoCurrentSize + order.actualProducts.size)
        assert(orderRepoSizeAfter == orderRepoSizeBefore + 1)

        var url = "/api/orders?size=${actualRepoCurrentSize + 1 + 10}"
        var result = mockMvc.perform(MockMvcRequestBuilders.get(url))
                .andExpect(MockMvcResultMatchers.status().isOk)
                .andReturn()

        var content = result.response.contentAsString

        var convertedObject = Gson()
                .fromJson(content, JsonObject::class.java)["_embedded"]
                .asJsonObject["orders"]
                .asJsonArray
        assert(orderRepoSizeAfter == convertedObject.size())

        url = "/api/actualProducts"
        result = mockMvc.perform(MockMvcRequestBuilders.get(url))
                .andExpect(MockMvcResultMatchers.status().isOk)
                .andReturn()

        content = result.response.contentAsString
        convertedObject = Gson()
                .fromJson(content, JsonObject::class.java)["_embedded"]
                .asJsonObject["actualProducts"]
                .asJsonArray
        assert(actualRepoSizeAfterInsertion == convertedObject.size())
    }
}