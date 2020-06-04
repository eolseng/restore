package no.repairable.backend.entity

import org.springframework.beans.factory.annotation.Value
import org.springframework.data.rest.core.config.Projection
import javax.persistence.*

@Entity
@Table(name = "images")
class Image(

        @Id
        @GeneratedValue
        @Column(name = "id")
        val id: Long? = null,

        val imgUrl: String? = null,

        @ManyToOne
        val color: Color? = null,

        @ManyToOne
        var product: Product? = null,

        var colorName: String? = color?.name

)

@Projection(
        name = "excerpt",
        types = [Image::class]
)
interface ExcerptImageProjection {
    fun getId(): Long

    fun getImgUrl(): String

    @Value("#{target.product.name}")
    fun getProductName(): String

    @Value("#{target.color.name}")
    fun getColorName(): String

    @Value("#{target.color.id}")
    fun getColorId(): Long
}