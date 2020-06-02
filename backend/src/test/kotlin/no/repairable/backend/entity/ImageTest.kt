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
class ImageTest @Autowired constructor(
        val mockMvc: MockMvc
) {

    @Test
    @Throws(Exception::class)
    fun  `checking status ok for images endpoint`() {
        mockMvc.perform(MockMvcRequestBuilders.get("/api/images"))
                .andExpect(MockMvcResultMatchers.status().isOk)
                .andDo(MockMvcRestDocumentation.document("images"))

    }

}