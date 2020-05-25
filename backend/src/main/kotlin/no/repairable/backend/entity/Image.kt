package no.repairable.backend.entity

import javax.persistence.Column
import javax.persistence.GeneratedValue
import javax.persistence.Id

class Image(
        @Id
        @GeneratedValue
        @Column(name = "id")
        val id: Long? = null,
        val imgUrl: String? = null
)

