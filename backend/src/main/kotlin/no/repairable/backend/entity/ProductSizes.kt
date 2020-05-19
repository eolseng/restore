package no.repairable.backend.entity

import javax.persistence.*

@Entity
@Table(name = "Product_sizes")
data class ProductSizes (
        @Id
        @GeneratedValue
        @Column(name = "id")
        var id: Long? = null,

        @OneToMany(mappedBy = "productSizesProd", cascade = [(CascadeType.ALL)])
        val productId: List<Product> = mutableListOf(),

        @OneToMany(mappedBy = "productSizesSize", cascade = [(CascadeType.ALL)])
        val sizeId: List<Size> = mutableListOf()
)
