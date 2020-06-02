package no.repairable.backend.entity

import net.minidev.json.annotate.JsonIgnore
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

        @JsonIgnore
        val password:String

        //val roles: List<String> = mutableListOf()

        //@OneToMany(mappedBy = "user")
        //val orders:MutableList<Order> = mutableListOf()
)