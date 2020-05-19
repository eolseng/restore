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

        //@NotNull
        //@Size(max = 256)
        @Column(name = "name")
        var name: String? = null,

        @OneToMany(mappedBy = "brand", cascade = [(CascadeType.ALL)])
        val brand: List<Product> = mutableListOf()


) {
        override fun toString(): String {
                return "$name"
        }
}