package no.repairable.backend.entity

import javax.persistence.*

@Entity
@Table(name = "User")
data class User (
        @Id
        @GeneratedValue
        @Column(name = "id")
        val id: Long? = null,
        val firstName: String,
        val lastName:String,
        val userName:String,
        val password:String
)