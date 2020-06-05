package no.repairable.backend.entity

import com.sun.istack.NotNull
import javax.persistence.*

/**
 * Represents the product that the customer wants to send for resale.
 * It contains the data needed to identify the garment
 * @see no.repairable.backend.entity.Order
 * @see no.repairable.backend.entity.Product
 * @see no.repairable.backend.entity.Color
 * @see no.repairable.backend.entity.Size
 * */
@Entity
@Table(name = "actual_products")
data class ActualProduct(
        @Id
        @GeneratedValue
        @Column(name = "id")
        val id: Long? = null,

        @NotNull
        @ManyToOne
        var product: Product,

        @ManyToOne
        val order: Order? = null,

        @NotNull
        @ManyToOne
        val color: Color,

        @NotNull
        @ManyToOne
        val size: Size
)

