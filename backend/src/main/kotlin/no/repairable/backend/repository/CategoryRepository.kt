package no.repairable.backend.repository

import no.repairable.backend.entity.Category
import no.repairable.backend.entity.ExcerptCategoryProjection
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.data.rest.core.annotation.RepositoryRestResource

@RepositoryRestResource(excerptProjection = ExcerptCategoryProjection::class)
interface CategoryRepository : JpaRepository<Category, Long>