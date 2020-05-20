package no.repairable.backend.entity

import javax.persistence.*
import javax.validation.constraints.NotNull

@Entity
@Table(name = "Size")
data class Size (
        @Id
        @GeneratedValue
        @Column(name = "id")
        var id: Long? = null,

        //@NotNull
        @Column(name = "size")
        var size: String = "",

        @ManyToOne(fetch = FetchType.LAZY,cascade = [(CascadeType.ALL)])
        //@Column(name = "productSizes")
        val productSizesSize : ProductSizes? = null
)