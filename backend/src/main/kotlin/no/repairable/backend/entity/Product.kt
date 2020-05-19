package no.repairable.backend.entity

import javax.persistence.*

@Entity
@Table(name = "product")
data class Product (

    @Id
    @GeneratedValue
    @Column(name = "id")
    private var id: Long? = null,

    @Column(name = "name")
    var name: String? = "",

    @Column(name = "category_id")
    private var cataegoryId: Long? = null,

    @Column(name = "sub_category_id")
    private var subCategoryId: Long? = null,

    @Column(name = "brand_id")
    private var brandId: Long? = null,

    @Column(name = "description")
    private var description: String? = null,

/*
    @ManyToOne(fetch = FetchType.LAZY)
    private val gender: Gender = Gender()*/
    @Column(name = "gender")
    private var gender: Char? = null

)