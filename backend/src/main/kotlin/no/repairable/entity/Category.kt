package no.repairable.entity

import javax.persistence.Column
import javax.persistence.GeneratedValue
import javax.persistence.Id

data class Category(
        @Id
        @GeneratedValue
        @Column(name = "id")
        private var id: Long? = null,

        @Column
        private val name: String? = ""
)