package no.repairable.backend.repository

import com.querydsl.core.types.dsl.StringPath
import no.repairable.backend.entity.QUser
import no.repairable.backend.entity.User
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.data.querydsl.QuerydslPredicateExecutor
import org.springframework.data.querydsl.binding.QuerydslBinderCustomizer
import org.springframework.data.querydsl.binding.QuerydslBindings
import org.springframework.data.rest.core.annotation.RepositoryRestResource

@RepositoryRestResource(exported = false)
interface UserRepository : JpaRepository<User, Long>,
        QuerydslPredicateExecutor<User>,
        QuerydslBinderCustomizer<QUser> {

    @JvmDefault
    override fun customize(bindings: QuerydslBindings, root: QUser) {
        bindings.bind(String::class.java).first { path: StringPath, value: String? -> path.containsIgnoreCase(value) }
    }

    fun findByUsername(name: String) : User

    fun existsByUsername(name: String) : Boolean
}