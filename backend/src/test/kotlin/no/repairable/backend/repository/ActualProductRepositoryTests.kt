package no.repairable.backend.repository

import no.repairable.backend.entity.ActualProduct
import no.repairable.no.repairable.backend.repository.BeforeAllRepoTests
import org.junit.jupiter.api.Test
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest
import org.springframework.boot.test.autoconfigure.web.reactive.AutoConfigureWebTestClient
import org.springframework.test.context.ActiveProfiles


@ActiveProfiles("test")
@DataJpaTest
class ActualProductRepositoryTests : BeforeAllRepoTests() {

    @Test
    fun `inserting objects into actualProductsRepo to check if correct values are stored`() {
        val currentSize = actualProductRepository.findAll().size
        val product = productRepository.findAll()[0]
        val product1 = productRepository.findAll()[1]
        actualProductRepository.save(ActualProduct(product = product, color = product.colors!![1], size = product.sizes[0]))
        actualProductRepository.save(ActualProduct(product = product1, color = product.colors!![0], size = product.sizes[1]))
        val sizeAfterInsertion = actualProductRepository.findAll().size

        assert(sizeAfterInsertion > currentSize)
        assert(actualProductRepository.count() > 0)
        assert(actualProductRepository.findAll()[0].product.name == "Windorama")
        assert(actualProductRepository.findAll()[1].product.name == "Skallorama")


    }
}