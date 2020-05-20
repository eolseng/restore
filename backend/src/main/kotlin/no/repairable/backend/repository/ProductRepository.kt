package no.repairable.backend.repository

import com.querydsl.core.types.dsl.StringPath
import no.repairable.backend.entity.Product
import no.repairable.backend.entity.QProduct
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.data.querydsl.QuerydslPredicateExecutor

import org.springframework.data.querydsl.binding.QuerydslBinderCustomizer
import org.springframework.data.querydsl.binding.QuerydslBindings
import org.springframework.stereotype.Repository



@Repository
interface ProductRepository : JpaRepository<Product, Long>,
        QuerydslPredicateExecutor<Product>,
        QuerydslBinderCustomizer<QProduct> {
    fun findByName(name: String): Product

    @JvmDefault
    override fun customize(bindings: QuerydslBindings, root: QProduct) {
        bindings.bind(String::class.java).first { path: StringPath, value: String? -> path.containsIgnoreCase(value) }

    }
    //fun findByCategory_IdAndSubCategory_IdAndBrand_Id(category: Category, subCategory: SubCategory): List<Product>

}

