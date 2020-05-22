package no.repairable.backend.entity


import org.springframework.data.rest.core.config.Projection
import javax.persistence.*

@Entity
@Table(name = "gender")
data class Gender(
        @Id
        @GeneratedValue
        @Column(name = "id")
        var id: Long? = null,

       // @NotNull
        @Column(name = "gender")
        var genderType: Char? = null,

        @OneToMany(mappedBy = "gender", cascade = [(CascadeType.ALL)])
        val gender: List<Product> = mutableListOf()
)

@Projection(
        name = "excerpt",
        types = [Brand::class]
)
interface ExcerptGenderProjection {

        fun getId(): Long
        fun getGenderType(): String

}