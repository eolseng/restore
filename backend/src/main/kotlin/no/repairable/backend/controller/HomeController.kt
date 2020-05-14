package no.repairable.backend.controller

import org.springframework.stereotype.Controller
import org.springframework.web.bind.annotation.RequestMapping

@Controller // <1>
class HomeController {
    @RequestMapping(value = ["/"]) // <2>
    fun index(): String {
        return "index" // <3>
    }
}