package no.repairable.backend.entity

import org.springframework.data.rest.core.config.Projection
import javax.persistence.*
import javax.validation.constraints.NotNull


/**
 * Represents a product that the Brand accepts for resale through the Restore solution. It is used to classify the actual product that will be sent for resale by
 * a customer.
 *
 * @see no.repairable.backend.entity.Category
 * @see no.repairable.backend.entity.SubCategory
 * @see no.repairable.backend.entity.Brand
 * @see no.repairable.backend.entity.Gender
 * @see no.repairable.backend.entity.Size
 * @see no.repairable.backend.entity.Color
 * @see no.repairable.backend.entity.Image
 *
 */
@Entity
@Table(name = "products")
data class Product(

        @Id
        @GeneratedValue
        @Column(name = "id")
        val id: Long? = null,

        @NotNull
        @Column(name = "name")
        val name: String? = "",

        @Column(name = "description")
        val description: String? = null,

        @ManyToOne(fetch = FetchType.LAZY)
        val category: Category? = null,

        @ManyToOne(fetch = FetchType.LAZY)
        val subCategory: SubCategory? = null,

        @ManyToOne(fetch = FetchType.LAZY)
        val brand: Brand? = null,

        @ManyToOne(fetch = FetchType.LAZY)
        val gender: Gender? = null,

        @ManyToMany(fetch = FetchType.LAZY)
        var sizes: MutableList<Size> = mutableListOf(),

        @ManyToMany(mappedBy = "products", fetch = FetchType.LAZY)
        val colors: List<Color>? = null,

        @OneToMany(mappedBy = "product")
        val images: MutableList<Image> = mutableListOf()
)

@Projection(
        name = "excerpt",
        types = [Product::class]
)
interface ExcerptProductProjection {
    fun getId(): Long
    fun getName(): String
    fun getImages(): List<Image>
}
