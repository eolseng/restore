package no.repairable.backend.entity

import javax.persistence.*

@Entity
@Table(name = "category")
data class Category(
        @Id
        @GeneratedValue
        @Column(name = "id")
        private var id: Long? = null,

        @Column
        private val name: String? = ""
)