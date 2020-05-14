package no.repairable.backend.entity

import javax.persistence.Column
import javax.persistence.Entity
import javax.persistence.GeneratedValue
import javax.persistence.Id

@Entity
data class Category(
        @Id
        @GeneratedValue
        @Column(name = "id")
        private var id: Long? = null,

        @Column
        private val name: String? = ""
)