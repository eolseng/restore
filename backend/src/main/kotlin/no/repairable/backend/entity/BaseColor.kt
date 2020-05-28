package no.repairable.backend.entity

import org.springframework.data.rest.core.config.Projection
import javax.persistence.*

@Entity
@Table(name = "base_color")
data class BaseColor(

        @Id
        @GeneratedValue
        var id: Long? = null,
        var name: String? = null,
        @OneToMany(mappedBy = "baseColor")
        val colors: MutableList<Color> = mutableListOf()

)

@Projection(
        name = "excerpt",
        types = [BaseColor::class]
)
interface ExcerptBaseColorProjection {
        fun getId(): Long
        fun getName(): String
        fun getColors(): List<Color>
}