package no.repairable.backend.entity


import javax.persistence.*
import javax.validation.constraints.NotNull
import javax.validation.constraints.Size

@Entity
@Table(name = "category")
data class Category(
        @Id
        @GeneratedValue
        @Column(name = "id")
        var id: Long? = null,

        //@NotNull
        @Size(max = 256)
        @Column(name = "name")
        var name: String? = "",

        @OneToMany(mappedBy = "category", cascade = [(CascadeType.ALL)])
        val category: List<Product> = mutableListOf()
)