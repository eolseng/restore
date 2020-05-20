package no.repairable

import org.springframework.boot.runApplication

class LocalApplicationRunner {
    fun main(args: Array<String>) {
        runApplication<RestoreApplication>()
    }

}