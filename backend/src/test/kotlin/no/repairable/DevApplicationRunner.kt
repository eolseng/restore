package no.repairable.no.repairable

import no.repairable.RestoreApplication
import org.springframework.boot.runApplication

class DevApplicationRunner

fun main() {
    runApplication<RestoreApplication>("--spring.profiles.active=dev")
}