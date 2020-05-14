package no.repairable.entity

import javax.persistence.*

@Entity
data class Gender(
        @Id
        @GeneratedValue
        @Column(name = "gender_id")
        var id: Long? = null,

        @Column(name = "gender")
        private var gender: Char? = null,

        @OneToMany(mappedBy = "gender", cascade = arrayOf(CascadeType.ALL))
        val items: List<Product> = mutableListOf()
)