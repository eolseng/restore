package no.repairable.backend.entity

import javax.persistence.*

@Entity
@Table(name = "users")
data class User (
        @Id
        @GeneratedValue
        @Column(name = "id")
        val id: Long? = null,
        val firstName: String,
        val lastName:String,
        val userName:String,
        val password:String,
        @OneToMany(mappedBy = "user")
        val orders:MutableList<Order> = mutableListOf()
)