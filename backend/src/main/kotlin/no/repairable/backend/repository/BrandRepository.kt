package no.repairable.backend.repository

import no.repairable.backend.entity.Brand
import no.repairable.backend.entity.ExcerptBrandProjection
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.data.rest.core.annotation.RepositoryRestResource

@RepositoryRestResource(excerptProjection = ExcerptBrandProjection::class)
interface BrandRepository : JpaRepository<Brand, Long>