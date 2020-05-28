package no.repairable.backend.controller

import no.repairable.backend.entity.ActualProduct
import no.repairable.backend.entity.Order
import no.repairable.backend.repository.*
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

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

    @PostMapping("/create-order")
    fun createNewOrder(@RequestBody order: OrderData) {

        val productsInOrder : MutableList<ActualProduct> = mutableListOf()

        for (product in order.actualProducts) {
            val color = colorRepository.findByName(product.color)!!
            val size = sizeRepository.findByName(product.size)!!
            val chosenProduct = productRepository.findById(product.id).orElse(null)
            val actualProduct = ActualProduct(color = color, size = size, product = chosenProduct)
            actualProductRepository.save(actualProduct)
            productsInOrder.add(actualProduct)
        }
        val user  = userRepository.findById(order.userID).orElse(null)!!
        val newOrder = Order(id = order.userID, actualProducts = productsInOrder, deliveryType = order.deliveryType, user = user)
        orderRepository.save(newOrder)
    }

    data class OrderData(
            val actualProducts: List<ActualProductData>,
            val userID: Long,
            val deliveryType: String
    )

    data class ActualProductData(
            val id: Long,
            val size: String,
            val color: String
    )
}