package no.repairable.backend.repository

import com.querydsl.core.types.dsl.StringPath
import no.repairable.backend.entity.ExcerptSizeProjection
import no.repairable.backend.entity.QSize
import no.repairable.backend.entity.Size
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.data.querydsl.QuerydslPredicateExecutor
import org.springframework.data.querydsl.binding.QuerydslBinderCustomizer
import org.springframework.data.querydsl.binding.QuerydslBindings
import org.springframework.data.rest.core.annotation.RepositoryRestResource

@RepositoryRestResource(excerptProjection = ExcerptSizeProjection::class)
interface SizeRepository : JpaRepository<Size, Long>,
        QuerydslPredicateExecutor<Size>,
        QuerydslBinderCustomizer<QSize> {

    @JvmDefault
    override fun customize(bindings: QuerydslBindings, root: QSize) {
        bindings.bind(String::class.java).first { path: StringPath, value: String? -> path.containsIgnoreCase(value) }
    }

    fun findByName(name: String): Size?

}