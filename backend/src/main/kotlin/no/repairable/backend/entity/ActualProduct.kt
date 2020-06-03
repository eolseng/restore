package no.repairable.backend.entity

import com.sun.istack.NotNull
import javax.persistence.*


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

