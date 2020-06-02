package no.repairable.backend.repository

import no.repairable.backend.entity.ActualProduct
import no.repairable.backend.entity.Color
import no.repairable.backend.entity.Product
import no.repairable.backend.entity.Size
import org.assertj.core.api.Assertions.assertThat
import org.junit.jupiter.api.Test
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager


@DataJpaTest
class ActualProductRepositoryTest @Autowired constructor(
        val actualProductRepository: ActualProductRepository,
        val entityManager: TestEntityManager


) {

    @Test
    fun testActualProductRepo() {
        val productTestData = Product(name = "Racklet")
        val productTestData2 = Product(name = "Shorts")
        val color = Color(name = "blue")
        val size = Size(name = "m")

        val actualProductTestData = ActualProduct(product = productTestData, color = color, size = size)
        val actualProductTestData2 = ActualProduct(product = productTestData2, color = color, size = size)
        entityManager.persist(actualProductTestData)
        entityManager.persist(actualProductTestData2)

        var searchId = actualProductTestData.id!!

        val found = actualProductRepository.findById(searchId).get()
        assertThat(found.product == actualProductTestData.product)
        assertThat(found.id == actualProductTestData.id)

        searchId = actualProductTestData2.id!!

        val found2 = actualProductRepository.findById(searchId).get()
        assertThat(found2.product.name == actualProductTestData2.product.name)
        assertThat(found2.id == actualProductTestData2.id)
        assertThat(found2.id != found.id)
    }
}