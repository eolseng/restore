package no.repairable.backend.controller

import no.repairable.backend.entity.ActualProduct
import no.repairable.backend.entity.Order
import no.repairable.backend.repository.*
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.HttpStatus
import org.springframework.web.bind.annotation.*


/**
 * Handles all order-creation through the /api/order endpoint
 * */
@RestController
@RequestMapping("api/order")
class OrderController @Autowired constructor(
        private val productRepository: ProductRepository,
        private val actualProductRepository: ActualProductRepository,
        private val colorRepository: ColorRepository,
        private val sizeRepository: SizeRepository,
        private val orderRepository: OrderRepository,
        private val userRepository: UserRepository
) {

    /**
     * Creates a new order based on data supplied from frontend in a json object.
     * An order contains a ActualProduct, the user id of the user that is logged in and what kind of delivery type they want to use
     * @param order at data class corresponding to the incoming json object. This is parsed and saved on the server side database
     * @see no.repairable.backend.entity.Order
     * */
    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping("")
    fun createNewOrder(@RequestBody order: OrderDTO) {

        val productsInOrder: MutableList<ActualProduct> = mutableListOf()

        for (product in order.actualProducts) {
            val color = colorRepository.findByName(product.color)!!
            val size = sizeRepository.findByName(product.size)!!
            val chosenProduct = productRepository.findById(product.id).get()
            val actualProduct = ActualProduct(color = color, size = size, product = chosenProduct)
            actualProductRepository.save(actualProduct)
            productsInOrder.add(actualProduct)
        }
        val user = userRepository.findById(order.userID).get()
        val newOrder = Order(id = order.userID, actualProducts = productsInOrder, deliveryType = order.deliveryType, user = user)
        orderRepository.save(newOrder)
    }

    data class OrderDTO(
            val actualProducts: List<ActualProductDTO>,
            val userID: Long,
            val deliveryType: String
    )

    data class ActualProductDTO(
            val id: Long,
            val size: String,
            val color: String
    )
}