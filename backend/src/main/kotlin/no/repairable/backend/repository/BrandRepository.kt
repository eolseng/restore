package no.repairable.backend.repository

import com.querydsl.core.types.dsl.StringPath
import no.repairable.backend.entity.Brand
import no.repairable.backend.entity.ExcerptBrandProjection
import no.repairable.backend.entity.QBrand
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.data.querydsl.QuerydslPredicateExecutor
import org.springframework.data.querydsl.binding.QuerydslBinderCustomizer
import org.springframework.data.querydsl.binding.QuerydslBindings
import org.springframework.data.rest.core.annotation.RepositoryRestResource

@RepositoryRestResource(excerptProjection = ExcerptBrandProjection::class)
interface BrandRepository : JpaRepository<Brand, Long>,
        QuerydslPredicateExecutor<Brand>,
        QuerydslBinderCustomizer<QBrand> {

    @JvmDefault
    override fun customize(bindings: QuerydslBindings, root: QBrand) {
        bindings.bind(String::class.java).first { path: StringPath, value: String? -> path.containsIgnoreCase(value) }
    }

    fun findBrandByName(name: String): Brand?

}