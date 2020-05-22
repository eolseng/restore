package no.repairable.backend.repository

import com.querydsl.core.types.dsl.StringPath
import no.repairable.backend.entity.ExcerptGenderProjection
import no.repairable.backend.entity.Gender
import no.repairable.backend.entity.QGender
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.data.querydsl.QuerydslPredicateExecutor
import org.springframework.data.querydsl.binding.QuerydslBinderCustomizer
import org.springframework.data.querydsl.binding.QuerydslBindings
import org.springframework.data.rest.core.annotation.RepositoryRestResource

@RepositoryRestResource(excerptProjection = ExcerptGenderProjection::class)
interface GenderRepository : JpaRepository<Gender, Long>,
        QuerydslPredicateExecutor<Gender>,
        QuerydslBinderCustomizer<QGender> {

    @JvmDefault
    override fun customize(bindings: QuerydslBindings, root: QGender) {
        bindings.bind(String::class.java).first { path: StringPath, value: String? -> path.containsIgnoreCase(value) }
    }

}