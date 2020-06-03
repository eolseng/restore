package no.repairable.backend.entity


import org.springframework.data.rest.core.config.Projection
import javax.persistence.*

@Entity
@Table(name = "genders")
data class Gender(
        @Id
        @GeneratedValue
        @Column(name = "id")
        var id: Long? = null,

       // @NotNull
        @Column(name = "gender")
        var name: String? = null,

        @OneToMany(mappedBy = "gender", cascade = [(CascadeType.ALL)])
        val products: List<Product> = mutableListOf()
)

@Projection(
        name = "excerpt",
        types = [Brand::class]
)
interface ExcerptGenderProjection {

        fun getId(): Long
        fun getName(): String

}