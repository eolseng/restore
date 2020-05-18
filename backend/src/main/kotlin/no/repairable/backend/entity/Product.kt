package no.repairable.backend.entity

import javax.persistence.*
import javax.validation.constraints.NotNull

@Entity
@Table(name = "product")
data class Product (

    @Id
    @GeneratedValue
    @Column(name = "id")
    var id: Long? = null,

    @NotNull
    @Column(name = "name")
    var name: String? = "",

    @Column(name = "category_id")
    var cataegoryId: Long? = null,

    @Column(name = "sub_category_id")
    var subCategoryId: Long? = null,

    @Column(name = "brand_id")
    var brandId: Long? = null,

    @Column(name = "description")
    var description: String? = null,

    @ManyToOne(fetch = FetchType.LAZY, cascade = arrayOf(CascadeType.ALL))
    val gender: Gender = Gender()
)