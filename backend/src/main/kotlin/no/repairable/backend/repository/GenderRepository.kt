package no.repairable.backend.repository

import no.repairable.backend.entity.ExcerptGenderProjection
import no.repairable.backend.entity.ExcerptProductProjection
import no.repairable.backend.entity.Gender
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.data.rest.core.annotation.RepositoryRestResource
import org.springframework.stereotype.Repository

@RepositoryRestResource(excerptProjection = ExcerptGenderProjection::class)
interface GenderRepository : JpaRepository<Gender, Long>