package no.repairable.backend.entity

import org.springframework.data.rest.core.config.Projection
import javax.persistence.*

/**
 * Represents the base color. e.g "Navy Blue" is represented as "Blue" in BaseColor
 * It contains the data needed to keep track of the base color of every Color object in the database
 * @see no.repairable.backend.entity.Color
 * */
@Entity
@Table(name = "base_colors")
data class BaseColor(

        @Id
        @GeneratedValue
        var id: Long? = null,
        var name: String,
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