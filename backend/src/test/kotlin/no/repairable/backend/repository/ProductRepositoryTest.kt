package no.repairable.no.repairable.backend.repository

import no.repairable.backend.entity.Product
import no.repairable.backend.repository.ProductRepository
import org.assertj.core.api.Assertions.assertThat
import org.junit.jupiter.api.Test
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest


@DataJpaTest
class ProductRepositoryTest {

    @Autowired
    final val productRepo: ProductRepository? = null

    @Test
    fun testProductRepo() {

        val productTestData = Product(name = "Racklet")
        val productTestData2 = Product(name = "Pants")
        productRepo?.save(productTestData)
        productRepo?.save(productTestData2)
/*
        val found = productRepo?.findByName("Racklet")
        assertThat(found?.name == productTestData.name)
        assertThat(found?.id == productTestData.id)


        val found2 = productRepo?.findByName("Pants")
        assertThat(found2?.name == productTestData2.name)
        assertThat(found2?.id == productTestData2.id)
        assertThat(found2?.id != found?.id)
        */

    }

}