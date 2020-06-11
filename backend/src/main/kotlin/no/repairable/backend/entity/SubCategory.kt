package no.repairable.backend.entity

import org.springframework.data.rest.core.config.Projection
import javax.persistence.*

/**
 * Represents a clothing sub category. eg. "Wind jackets" in the "Jackets" category
 * It contains a list of all products in the sub category
 * @see no.repairable.backend.entity.Product
 */
@Entity
@Table(name = "sub_categories")
data class SubCategory(
        @Id
        @GeneratedValue
        @Column(name = "id")
        var id: Long? = null, //PK

        //@Column(name = "category_id")
        //val categoryId: Long? = null, //FK

        @Column(name = "name")
        var name: String? = "",

        @OneToMany(mappedBy = "subCategory", cascade = [(CascadeType.ALL)])
        val products: List<Product> = mutableListOf()
)

@Projection(
        name = "excerpt",
        types = [Brand::class]
)
interface ExcerptSubCategoryProjection {

    fun getId(): Long
    fun getName(): String

}