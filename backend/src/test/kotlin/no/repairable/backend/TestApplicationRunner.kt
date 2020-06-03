package no.repairable.no.repairable.backend

import no.repairable.RestoreApplication
import org.springframework.boot.runApplication

class TestApplicationRunner

fun main() {
    runApplication<RestoreApplication>("--spring.profiles.active=test")
}