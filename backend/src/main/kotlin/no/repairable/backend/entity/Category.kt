package no.repairable.backend.entity


import org.springframework.data.rest.core.config.Projection
import javax.persistence.*
import javax.validation.constraints.Size

@Entity
@Table(name = "categories")
data class Category(
        @Id
        @GeneratedValue
        @Column(name = "id")
        var id: Long? = null,

        //@NotNull
        @Size(max = 256)
        @Column(name = "name")
        var name: String? = "",

        @OneToMany(mappedBy = "category", cascade = [(CascadeType.ALL)])
        val products: List<Product> = mutableListOf()
)

@Projection(
        name = "excerpt",
        types = [Brand::class]
)
interface ExcerptCategoryProjection {

        fun getId(): Long
        fun getName(): String

}