package no.repairable

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication

@SpringBootApplication
class RestoreApplication

fun main(args: Array<String>) {
    runApplication<RestoreApplication>(*args)
}
