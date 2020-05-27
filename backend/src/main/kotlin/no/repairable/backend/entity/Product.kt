package no.repairable.backend.entity

import org.springframework.beans.factory.annotation.Value
import org.springframework.data.rest.core.config.Projection
import javax.persistence.*
import javax.validation.constraints.NotNull

@Entity
@Table(name = "product")
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
        val sizes: List<Size>? = null,

        @ManyToMany(mappedBy = "products")
        val colors : List<Color>? = null,

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
    fun getDescription(): String
    @Value("#{target.brand.name}")
    fun getBrand(): String
    @Value("#{target.category.name}")
    fun getCategory(): String
    @Value("#{target.subCategory.name}")
    fun getSubCategory(): String
}
