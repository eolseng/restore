package no.repairable.backend.repository

import no.repairable.backend.entity.ExcerptGenderProjection
import no.repairable.backend.entity.Gender
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.data.rest.core.annotation.RepositoryRestResource

@RepositoryRestResource(excerptProjection = ExcerptGenderProjection::class)
interface GenderRepository : JpaRepository<Gender, Long>