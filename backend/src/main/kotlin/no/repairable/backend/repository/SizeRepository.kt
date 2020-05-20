package no.repairable.backend.repository

import no.repairable.backend.entity.ExcerptSizeProjection
import no.repairable.backend.entity.Size
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.data.rest.core.annotation.RepositoryRestResource

@RepositoryRestResource(excerptProjection = ExcerptSizeProjection::class)
interface SizeRepository : JpaRepository<Size, Long>