package no.repairable.backend.entity

import javax.persistence.*

@Entity
@Table(name = "color")
class Color(

        val name: String? = null,

        @ManyToOne
        val brand: Brand? = null,

        @ManyToMany
        val products: MutableList<Product> = mutableListOf(),

        @Id
        @GeneratedValue
        @Column(name = "id")
        var id: Long? = null
)