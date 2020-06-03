package no.repairable.backend.entity

import org.springframework.beans.factory.annotation.Value
import org.springframework.data.rest.core.config.Projection
import javax.persistence.*

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