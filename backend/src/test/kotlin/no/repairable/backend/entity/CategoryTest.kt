package no.repairable.backend.entity


import com.google.api.client.json.Json
import com.google.gson.JsonObject
import org.junit.jupiter.api.Test
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.autoconfigure.restdocs.AutoConfigureRestDocs
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.restdocs.mockmvc.MockMvcRestDocumentation
import org.springframework.test.web.servlet.MockMvc
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders
import org.springframework.test.web.servlet.result.MockMvcResultHandlers
import org.springframework.test.web.servlet.result.MockMvcResultMatchers
import java.io.ByteArrayOutputStream


@SpringBootTest
@AutoConfigureRestDocs
@AutoConfigureMockMvc
class CategoryTest @Autowired constructor(
        val mockMvc: MockMvc
) {

    @Test
    fun `checking status ok for category endpoint`() {
        mockMvc.perform(MockMvcRequestBuilders.get("/api/categories"))
                .andExpect(MockMvcResultMatchers.status().isOk)
                .andDo(MockMvcRestDocumentation.document("categories"))

    }
/*
    @Test
    @Throws(Exception::class)
    fun checkFirstCategory() {
        mockMvc.perform(MockMvcRequestBuilders.get("/api/categories/1")).andDo(MockMvcResultHandlers.print())
                .andExpect(MockMvcResultMatchers.status().isOk)
                .andDo(MockMvcRestDocumentation.document("categories"))
    }
*/

}
