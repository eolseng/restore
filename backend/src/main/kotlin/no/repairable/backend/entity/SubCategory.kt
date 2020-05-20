package no.repairable.backend.entity

import javax.persistence.*
import javax.persistence.Column
import javax.persistence.Entity
import javax.persistence.GeneratedValue
import javax.persistence.Id

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