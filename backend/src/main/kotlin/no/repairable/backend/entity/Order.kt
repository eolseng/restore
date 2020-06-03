package no.repairable.backend.entity


import javax.persistence.*


@Entity
@Table(name = "orders")
data class Order (

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