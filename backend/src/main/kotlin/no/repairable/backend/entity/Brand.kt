package no.repairable.backend.entity

import org.springframework.data.rest.core.config.Projection
import javax.persistence.*

/**
 * Represents the brand of the Product.
 * It contains the data about the different colors the brand is associated with and a list of all the products that the brand has sold
 * @see no.repairable.backend.entity.Product
 * @see no.repairable.backend.entity.Color
 * */
@Entity
@Table(name = "brands")
data class Brand(
        @Id
        @GeneratedValue
        @Column(name = "id")
        var id: Long? = null,

        //@NotNull
        //@Size(max = 256)
        @Column(name = "name")
        var name: String? = null,

        @OneToMany(mappedBy = "brand", cascade = [(CascadeType.ALL)])
        val colors: List<Color>? = null,

        @OneToMany(mappedBy = "brand", cascade = [(CascadeType.ALL)])
        val products: List<Product> = mutableListOf()


)

@Projection(
        name = "excerpt",
        types = [Brand::class]
)
interface ExcerptBrandProjection {

    fun getId(): Long
    fun getName(): String

}