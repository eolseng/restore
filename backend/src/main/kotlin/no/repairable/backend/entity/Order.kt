package no.repairable.backend.entity


import javax.persistence.*

/**
 * Represents an Order containing information about the customer(User), the garment(ActualProduct) to be sent and how the garment is to be sent.
 * An order can contain more than one ActualProduct.
 * @see no.repairable.backend.entity.ActualProduct
 * @see no.repairable.backend.entity.User
 */
@Entity
@Table(name = "orders")
data class Order(

        @Id
        @GeneratedValue
        @Column(name = "id")
        val id: Long? = null,

        @OneToMany(mappedBy = "order", cascade = [(CascadeType.ALL)])
        val actualProducts: List<ActualProduct> = mutableListOf(),

        @ManyToOne
        val user: User,

        val deliveryType: String
)