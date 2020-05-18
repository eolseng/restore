package no.repairable.backend.entity

import javax.persistence.*

@Entity
@Table(name = "gender")
data class Gender(
        @Id
        @GeneratedValue
        @Column(name = "id")
        var id: Long? = null,

        @Column(name = "gender")
        private var gender: Char? = null
/*
        @OneToMany(mappedBy = "gender", cascade = arrayOf(CascadeType.ALL), orphanRemoval = true)
        val genderId: List<Product> = mutableListOf()*/
)