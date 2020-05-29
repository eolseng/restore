package no.repairable.backend.repository

import com.querydsl.core.types.dsl.StringPath
import no.repairable.backend.entity.Gender
import no.repairable.backend.entity.Order
import no.repairable.backend.entity.QOrder
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.data.querydsl.QuerydslPredicateExecutor
import org.springframework.data.querydsl.binding.QuerydslBinderCustomizer
import org.springframework.data.querydsl.binding.QuerydslBindings
import org.springframework.data.rest.core.annotation.RepositoryRestResource

@RepositoryRestResource
interface OrderRepository  : JpaRepository<Order, Long>,
        QuerydslPredicateExecutor<Gender>,
        QuerydslBinderCustomizer<QOrder> {

    @JvmDefault
    override fun customize(bindings: QuerydslBindings, root: QOrder) {
        bindings.bind(String::class.java).first { path: StringPath, value: String? -> path.containsIgnoreCase(value) }
    }

}