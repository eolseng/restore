package no.repairable.backend.repository

import no.repairable.backend.entity.BaseColor
import no.repairable.backend.entity.ExcerptBaseColorProjection
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.data.rest.core.annotation.RepositoryRestResource

@RepositoryRestResource(excerptProjection = ExcerptBaseColorProjection::class)
interface BaseColorRepository : JpaRepository<BaseColor, Long> {

    fun findByName(name: String): BaseColor

}
