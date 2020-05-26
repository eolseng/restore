package no.repairable.backend.entity

import javax.persistence.*

@Entity
@Table(name = "image")
class Image(
        @Id
        @GeneratedValue
        @Column(name = "id")
        val id: Long? = null,
        val imgUrl: String? = null
)

