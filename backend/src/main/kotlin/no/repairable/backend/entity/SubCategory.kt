package no.repairable.backend.entity

import org.springframework.data.rest.core.config.Projection
import javax.persistence.*

@Entity
@Table(name = "sub_category")
data class SubCategory(
        @Id
        @GeneratedValue
        @Column(name = "id")
        var id: Long? = null, //PK

        //@Column(name = "category_id")
        //val categoryId: Long? = null, //FK

        @Column(name = "name")
        var name: String? = "",

        @OneToMany(mappedBy = "subCategory",cascade = [(CascadeType.ALL)])
        val subCategory: List<Product> = mutableListOf()
)

@Projection(
        name = "excerpt",
        types = [Brand::class]
)
interface ExcerptSubCategoryProjection {

        fun getId(): Long
        fun getName(): String

}