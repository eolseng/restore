package no.repairable.backend.entity

import org.springframework.beans.factory.annotation.Value
import org.springframework.data.rest.core.config.Projection
import javax.persistence.*

/**
 * Represent the color of a Product.
 * It contains a list of all the products that exists in that color and also what brand that the color is owned by.
 * @see no.repairable.backend.entity.BaseColor
 * @see no.repairable.backend.entity.Brand
 * @see no.repairable.backend.entity.Product
 * */
@Entity
@Table(name = "colors")
class Color(
        @Id
        @GeneratedValue
        @Column(name = "id")
        val id: Long? = null,
        val name: String? = null,
        @ManyToOne
        val baseColor: BaseColor? = null,
        @ManyToOne
        val brand: Brand? = null,
        @ManyToMany
        val products: MutableList<Product> = mutableListOf()
)

@Projection(
        name = "excerpt",
        types = [Color::class]
)
interface ExcerptColorProjection {

    fun getId(): Long
    fun getName(): String

    @Value("#{target.baseColor.name}")
    fun getBaseColor(): String

}