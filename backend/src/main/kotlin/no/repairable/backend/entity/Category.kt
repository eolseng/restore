package no.repairable.backend.entity

import javax.persistence.*

@Entity
@Table(name = "category")
data class Category(
        @Id
        @GeneratedValue
        @Column(name = "id")
        var id: Long? = null,

        @Column
        val name: String? = ""
)