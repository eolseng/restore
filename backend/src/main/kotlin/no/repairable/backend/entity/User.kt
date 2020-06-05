package no.repairable.backend.entity

import javax.persistence.*

/**
 * Represents a user of the Restore solution. Currently only contains string for the different variables
 * The user object is connected with all of the orders the user has created
 * @see no.repairable.backend.entity.Order
 */
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