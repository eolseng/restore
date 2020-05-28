package no.repairable.backend.entity

import javax.persistence.*

@Entity
@Table(name = "Color")
class Color(
        @Id
        @GeneratedValue
        @Column(name = "id")
        val id: Long? = null,

        val name: String? = null,

        @ManyToOne
        val brand: Brand? = null,

        @ManyToMany
        val products : MutableList<Product> = mutableListOf()
)