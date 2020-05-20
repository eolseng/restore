package no.repairable.backend.repository

import no.repairable.backend.entity.ExcerptProductProjection
import no.repairable.backend.entity.ExcerptSubCategoryProjection
import no.repairable.backend.entity.SubCategory
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.data.rest.core.annotation.RepositoryRestResource
import org.springframework.stereotype.Repository

@RepositoryRestResource(excerptProjection = ExcerptSubCategoryProjection::class)
interface SubCategoryRepository : JpaRepository<SubCategory, Long>