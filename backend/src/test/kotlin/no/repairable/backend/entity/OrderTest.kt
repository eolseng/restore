package no.repairable.backend.entity

import org.junit.jupiter.api.Test
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.autoconfigure.restdocs.AutoConfigureRestDocs
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.restdocs.mockmvc.MockMvcRestDocumentation
import org.springframework.test.web.servlet.MockMvc
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders
import org.springframework.test.web.servlet.result.MockMvcResultMatchers


@SpringBootTest
@AutoConfigureRestDocs
@AutoConfigureMockMvc
class OrderTest @Autowired constructor(
        val mockMvc: MockMvc
) {

    @Test
    fun  `checking status ok for orders endpoint`() {
        mockMvc.perform(MockMvcRequestBuilders.get("/api/orders"))
                .andExpect(MockMvcResultMatchers.status().isOk)
                .andDo(MockMvcRestDocumentation.document("orders"))

    }

    @Test
    fun `POST test order`() {
        mockMvc.perform(MockMvcRequestBuilders.post("/api/insert/"))
                .andExpect(MockMvcResultMatchers.status().isOk)
                .andDo(MockMvcRestDocumentation.document("actualProducts"))

    }

}