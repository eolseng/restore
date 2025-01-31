package no.repairable.backend.entity

import no.repairable.backend.repository.ProductRepository
import org.junit.jupiter.api.Test
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.autoconfigure.restdocs.AutoConfigureRestDocs
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.restdocs.mockmvc.MockMvcRestDocumentation
import org.springframework.test.context.ActiveProfiles
import org.springframework.test.web.servlet.MockMvc
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders
import org.springframework.test.web.servlet.result.MockMvcResultHandlers
import org.springframework.test.web.servlet.result.MockMvcResultMatchers

@ActiveProfiles("test")
@SpringBootTest
@AutoConfigureRestDocs
@AutoConfigureMockMvc
class ProductTest @Autowired constructor(
        val mockMvc: MockMvc,
        val productRepo: ProductRepository
) {
    @Test
    fun `checking if products endpoint is online`() {
        mockMvc.perform(MockMvcRequestBuilders.get("/api/products"))
                .andExpect(MockMvcResultMatchers.status().isOk)
                .andDo(MockMvcRestDocumentation.document("products"))
    }

    @Test
    fun `testing query on products endpoint`() {
        productRepo.save(Product(name = "Test"))
        mockMvc.perform(MockMvcRequestBuilders.get("/api/products/search/findByName?name=Test")).andDo(MockMvcResultHandlers.print())
                .andExpect(MockMvcResultMatchers.status().isOk)
                .andDo(MockMvcRestDocumentation.document("findByName"))
    }
}
