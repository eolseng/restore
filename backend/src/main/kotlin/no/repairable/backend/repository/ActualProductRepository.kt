package no.repairable.backend.repository

import com.querydsl.core.types.dsl.StringPath
import no.repairable.backend.entity.ActualProduct
import no.repairable.backend.entity.QActualProduct
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.data.querydsl.QuerydslPredicateExecutor
import org.springframework.data.querydsl.binding.QuerydslBinderCustomizer
import org.springframework.data.querydsl.binding.QuerydslBindings
import org.springframework.data.rest.core.annotation.RepositoryRestResource

@RepositoryRestResource
interface ActualProductRepository : JpaRepository<ActualProduct, Long>,
        QuerydslPredicateExecutor<ActualProduct>,
        QuerydslBinderCustomizer<QActualProduct> {

    @JvmDefault
    override fun customize(bindings: QuerydslBindings, root: QActualProduct) {
        bindings.bind(String::class.java).first { path: StringPath, value: String? -> path.containsIgnoreCase(value) }
    }
}