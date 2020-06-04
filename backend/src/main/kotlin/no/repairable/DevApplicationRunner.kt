package no.repairable

import org.springframework.boot.runApplication

class DevApplicationRunner

fun main() {
    runApplication<RestoreApplication>("--spring.profiles.active=dev")
}