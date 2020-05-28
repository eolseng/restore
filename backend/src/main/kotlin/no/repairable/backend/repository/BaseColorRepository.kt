package no.repairable.backend.repository

import no.repairable.backend.entity.BaseColor
import no.repairable.backend.entity.ExcerptBaseColorProjection
import no.repairable.backend.entity.ExcerptColorProjection
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.data.rest.core.annotation.RepositoryRestResource

@RepositoryRestResource(excerptProjection = ExcerptBaseColorProjection::class)
interface BaseColorRepository : JpaRepository<BaseColor, Long>
