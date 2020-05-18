package no.repairable.backend.entity

import javax.persistence.*
import javax.validation.constraints.NotNull
import javax.validation.constraints.Size


@Entity
@Table(name = "brand")
data class Brand(
        @Id
        @GeneratedValue
        @Column(name = "id")
        var id: Long? = null,

        @NotNull
        @Size(max = 256)
        @Column(name = "name")
        val name: String? = "",

        @OneToMany(mappedBy = "brand", cascade = [(CascadeType.ALL)])
        val brandId: List<Product> = mutableListOf()
)