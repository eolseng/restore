package no.repairable.backend.entity

import org.springframework.data.rest.core.config.Projection
import javax.persistence.*

/**
 * Represents a clothing size.
 * An order can contain more than one ActualProduct.
 * @see no.repairable.backend.entity.Product
 */
@Entity
@Table(name = "sizes")
data class Size (
        @Id
        @GeneratedValue
        @Column(name = "id")
        var id: Long? = null,

        //@NotNull
        @Column(name = "size")
        var name: String = "",

        @ManyToMany(mappedBy = "sizes")
        var products: MutableList<Product> = mutableListOf()
)

@Projection(
        name = "excerpt",
        types = [Size::class]
)
interface ExcerptSizeProjection {

        fun getId(): Long
        fun getName(): String

}