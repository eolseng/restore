package no.repairable.backend.entity

import javax.persistence.*

class Color(
        @Id
        @GeneratedValue
        @Column(name = "id")
        val id: Long? = null,

        val name: String? = null,

        @ManyToOne
        val brand: Brand? = null,

        @OneToMany(mappedBy = "color")
        val products : List<Product>? = null

)