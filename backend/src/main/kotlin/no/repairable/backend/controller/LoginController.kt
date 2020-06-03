package no.repairable.backend.controller

import org.springframework.stereotype.Controller
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RequestMethod
import org.springframework.web.bind.annotation.ResponseBody
import java.security.Principal


@Controller
class LoginController {
    @RequestMapping(value = ["/username"], method = [RequestMethod.GET])
    @ResponseBody
    fun currentUserName(principal: Principal): String? {
        return principal.name
    }
}