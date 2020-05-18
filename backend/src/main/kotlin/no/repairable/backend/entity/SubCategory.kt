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
        private var id: Long? = null, //PK

        @Column
        private val category_id: Long? = null, //FK

        @Column
        private val name: String? = ""

        //@OneToMany(mappedBy = "sub_category", cascade = arrayOf(CascadeType.ALL))
        //val items: List<Product> = mutableListOf()
)