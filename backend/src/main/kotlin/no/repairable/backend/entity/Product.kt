package no.repairable.backend.entity

import javax.persistence.*
import javax.validation.constraints.NotNull

@Entity
@Table(name = "product")
data class Product(

        @Id
        @GeneratedValue
        @Column(name = "id")
        var id: Long? = null,

        @NotNull
        @Column(name = "name")
        var name: String? = "",

        @Column(name = "description")
        var description: String? = null,

        //@Column(name = "category_id")
        @ManyToOne(fetch = FetchType.LAZY)
        var category: Category? = null,

        @ManyToOne(fetch = FetchType.LAZY)
        //@Column(name = "sub_category_id")
        var subCategory: SubCategory? = null,

        //@Column(name = "brand_id")
        @ManyToOne(fetch = FetchType.LAZY)
        var brand: Brand? = null,

        @ManyToOne(fetch = FetchType.LAZY)
        val gender: Gender? = null,

        @ManyToOne(fetch = FetchType.LAZY)
        //@Column(name = "productSizesProd")
        val productSizesProd: ProductSizes? = null
)