package no.repairable.backend.entity


import javax.persistence.*
import javax.validation.constraints.NotNull

@Entity
@Table(name = "gender")
data class Gender(
        @Id
        @GeneratedValue
        @Column(name = "id")
        var id: Long? = null,

        @NotNull
        @Column(name = "gender")
        var gender: Char? = null,


        @OneToMany(mappedBy = "gender", cascade = [(CascadeType.ALL)])
        val genderId: List<Product> = mutableListOf()
)