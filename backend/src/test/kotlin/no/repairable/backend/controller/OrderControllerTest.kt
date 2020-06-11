package no.repairable.backend.controller

/*
@SpringBootTest
@ActiveProfiles("test")

@AutoConfigureRestDocs
@AutoConfigureMockMvc
class OrderControllerTest @Autowired constructor(
        val mockMvc: MockMvc,
        val productRepository: ProductRepository,
        val userRepository: UserRepository,
        val actualProductRepository: ActualProductRepository,
        val orderRepository: OrderRepository
) {

    @Autowired
    lateinit var objectMapper1: ObjectMapper
    lateinit var jsonList1: ProductsCreationController.ProductsPost
    lateinit var order1: OrderController.OrderDTO

    @BeforeEach
    fun initTestObjects() {

        val imageJson = ProductsCreationController.ColorImage(color = "blue", image = "url.com")
        val imageList = mutableListOf(imageJson)
        val sizes = listOf("s", "m", "l")
        val jsonObject = ProductsCreationController.ProductPostClass(brand = "Levis", name = "Test_garment1", category = "jeans", subCategory = "skinnyFit", colorImages = imageList, sizes = sizes, gender = "male", description = "skinny fit jeans")
        val jsonObject1 = ProductsCreationController.ProductPostClass(brand = "Helly Hansen", name = "Test_garment2", category = "jakker", subCategory = "Seilejakke", colorImages = imageList, sizes = sizes, gender = "female", description = "lett seiljakke til de korte turene")
        val productList = mutableListOf(jsonObject, jsonObject1)

        jsonList1 = ProductsCreationController.ProductsPost(productCollection = productList)

        val user = User(firstName = "E", lastName = "T", userName = "TestUser", password = "1234")
        userRepository.save(user)
        assert(user.id != null)

        mockMvc.perform(MockMvcRequestBuilders.post("/api/insert/products")
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper1.writeValueAsString(jsonList1)))
                .andExpect(status().isCreated)

        val products = productRepository.findAll()

        val acutalP1 = OrderController.ActualProductDTO(id = products[0].id!!, size = "s", color = "blue")
        val acutalP2 = OrderController.ActualProductDTO(id = products[1].id!!, size = "m", color = "blue")
        val acutalProductList = mutableListOf(acutalP1, acutalP2)

        order1 = OrderController.OrderDTO(userID = user.id!!, actualProducts = acutalProductList, deliveryType = "HeltHjem")
    }

    @Test
    fun `try POST without body on product creation endpoint`() {
        mockMvc.perform(MockMvcRequestBuilders.post("/api/order"))
                .andExpect(MockMvcResultMatchers.status().isBadRequest)
    }


    @Test
    fun `check if inserted values are correct`() {
        val actualRepoCurrentSize = actualProductRepository.findAll().size
        val orderRepoSizeBefore = orderRepository.findAll().size
        mockMvc.perform(MockMvcRequestBuilders.post("/api/order")
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper1.writeValueAsString(order1)))
                .andExpect(MockMvcResultMatchers.status().isCreated)

        val actualRepoSizeAfterInsertion = actualProductRepository.findAll().size
        val orderRepoSizeAfter = orderRepository.findAll().size

        assert(actualRepoSizeAfterInsertion == actualRepoCurrentSize + order1.actualProducts.size)
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

 */