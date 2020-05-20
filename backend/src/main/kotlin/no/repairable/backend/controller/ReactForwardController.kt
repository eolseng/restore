package no.repairable.backend.controller

import org.springframework.stereotype.Controller
import org.springframework.web.bind.annotation.GetMapping

@Controller
class ReactForwardController {

    /*
        This controller is used to forward routes used by the React Frontend through the Index.html-file.
        Nb.: Only used in Production Mode - Development Mode uses another port for serving the frontend.
        ALL REACT PAGES MUST BE ADDED TO THE LIST UNDER!
     */

    @GetMapping(
            "/",
            "/profile",
            "/filter",
            "/product",
            "/404"
    )
    fun getIndex(): String {
        return "index.html"
    }

}