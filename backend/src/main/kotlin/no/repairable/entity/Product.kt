package no.repairable.entity

import javax.persistence.Column
import javax.persistence.Entity
import javax.persistence.GeneratedValue
import javax.persistence.Id

@Entity
public class Product {

    @Id
    @GeneratedValue
    @Column(name = "id")
    private var id: Long? = null

    @Column(name = "name")
    private val name: String? = null

    @Column(name = "category_id")
    private var cataegoryId: Long? = null

    @Column(name = "sub_category_id")
    private var subCategoryId: Long? = null

    @Column(name = "brand_id")
    private var brandId: Long? = null

    @Column(name = "description")
    private var description: String? = null

    @Column(name = "gender")
    private var gender: Int? = null
}