package no.repairable.backend.entity

import com.sun.istack.NotNull
import javax.persistence.*


@Entity
@Table(name = "actualProduct")
data class ActualProduct(
        @Id
        @GeneratedValue
        @Column(name = "id")
        val id: Long? = null,
        @NotNull
        @ManyToOne
        var product: Product,

        @NotNull
        @ManyToOne
        val color: Color,

        @NotNull
        @ManyToOne
        val size: Size
)

