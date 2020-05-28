package no.repairable.backend.entity

import com.sun.istack.NotNull
import javax.persistence.*


@Entity
@Table(name = "Order")
data class Order (
        @Id
        @GeneratedValue
        @Column(name = "id")
        val id: Long? = null,

        @OneToMany
        val actualProducts: MutableList<ActualProduct> = mutableListOf(),

        @NotNull
        @ManyToOne
        val user: User,
        //TODO: Create class for deliveryType
        val deliveryType: String
)