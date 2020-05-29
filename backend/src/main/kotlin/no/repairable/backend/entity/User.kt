package no.repairable.backend.entity

import javax.persistence.*

@Entity
@Table(name = "user")
data class User (
        @Id
        @GeneratedValue
        @Column(name = "id")
        val id: Long? = null,
        val firstName: String,
        val lastName:String,
        val userName:String,
        val password:String
        //@OneToMany(mappedBy = "user")
        //val orders:MutableList<Order> = mutableListOf()
)