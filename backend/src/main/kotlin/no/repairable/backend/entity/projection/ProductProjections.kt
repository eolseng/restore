package no.repairable.backend.entity.projection

import no.repairable.backend.entity.Product
import org.springframework.beans.factory.annotation.Value
import org.springframework.data.rest.core.config.Projection

@Projection(
        name = "excerpt",
        types = [Product::class]
)
interface ExcerptProductProjection {

    fun getId(): Long
    fun getName(): String
    fun getDescription(): String
    @Value("#{target.brand.name}")
    fun getBrand(): String
    @Value("#{target.category.name}")
    fun getCategory(): String
    @Value("#{target.subCategory.name}")
    fun getSubCategory(): String
    @Value("#{target.gender.genderType}")
    fun getGender(): Char

}