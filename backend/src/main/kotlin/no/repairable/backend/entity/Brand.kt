package no.repairable.backend.entity

import org.springframework.data.rest.core.config.Projection
import javax.persistence.*

@Entity
@Table(name = "brand")
data class Brand(
        @Id
        @GeneratedValue
        @Column(name = "id")
        var id: Long? = null,

        //@NotNull
        //@Size(max = 256)
        @Column(name = "name")
        var name: String? = null,

        @OneToMany(mappedBy = "brand", cascade = [(CascadeType.ALL)])
        val products: List<Product> = mutableListOf()
)

@Projection(
        name = "excerpt",
        types = [Brand::class]
)
interface ExcerptBrandProjection {

        fun getId(): Long
        fun getName(): String

}