package no.repairable.backend.repository

import no.repairable.no.repairable.backend.repository.BeforeAllRepoTests
import org.junit.jupiter.api.Test
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest


@DataJpaTest
class ProductRepositoryTests : BeforeAllRepoTests() {

    @Test
    fun `check if productRepository contains more than 0 elements`() {
        assert(productRepository.count() > 0)
    }

    @Test
    fun `check stored objects`() {
        val products = productRepository.findAll()
        assert(products[0].name == "Windorama")
        assert(products[1].name == "Skallorama")
        assert(products[1].id != products[0].id)

    }
}