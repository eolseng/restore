package no.repairable.backend.entity

import javax.persistence.*

@Entity
@Table(name = "Image")
class Image(

        @Id
        @GeneratedValue
        @Column(name = "id")
        val id: Long? = null,

        val imgUrl: String? = null,

        @ManyToOne
        val color:Color? = null,

        @ManyToOne
        var product: Product? = null
)

