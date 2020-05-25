package no.repairable.backend.repository

import com.querydsl.core.types.dsl.StringPath
import no.repairable.backend.entity.ExcerptSubCategoryProjection
import no.repairable.backend.entity.QSubCategory
import no.repairable.backend.entity.SubCategory
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.data.querydsl.QuerydslPredicateExecutor
import org.springframework.data.querydsl.binding.QuerydslBinderCustomizer
import org.springframework.data.querydsl.binding.QuerydslBindings
import org.springframework.data.rest.core.annotation.RepositoryRestResource

@RepositoryRestResource(excerptProjection = ExcerptSubCategoryProjection::class)
interface SubCategoryRepository : JpaRepository<SubCategory, Long>,
        QuerydslPredicateExecutor<SubCategory>,
        QuerydslBinderCustomizer<QSubCategory> {

    @JvmDefault
    override fun customize(bindings: QuerydslBindings, root: QSubCategory) {
        bindings.bind(String::class.java).first { path: StringPath, value: String? -> path.containsIgnoreCase(value) }
    }

    fun findSubCategoriesByName(name:String) : SubCategory?
}