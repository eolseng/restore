package no.repairable.backend.entity

import javax.persistence.*

@Entity
@Table(name = "Product_sizes")
data class ProductSizes (
        @OneToMany(mappedBy = "productSizesProd", cascade = [(CascadeType.ALL)])
        val productId: List<Product> = mutableListOf(),

        @OneToMany(mappedBy = "productSizesSize", cascade = [(CascadeType.ALL)])
        val sizeId: List<Size> = mutableListOf()

)
