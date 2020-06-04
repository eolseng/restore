package no.repairable.backend.entity

import no.repairable.no.repairable.backend.entity.BeforeAllEntityTests
import org.junit.jupiter.api.Test
import org.springframework.restdocs.mockmvc.MockMvcRestDocumentation
import org.springframework.test.context.ActiveProfiles
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders
import org.springframework.test.web.servlet.result.MockMvcResultMatchers

@ActiveProfiles("test")
class ActualProductTest : BeforeAllEntityTests(){

    @Test
    fun `checking status ok for actualProducts endpoint`() {
        mockMvc.perform(MockMvcRequestBuilders.get("/api/actualProducts"))
                .andExpect(MockMvcResultMatchers.status().isOk)
                .andDo(MockMvcRestDocumentation.document("actualProducts"))
    }
}