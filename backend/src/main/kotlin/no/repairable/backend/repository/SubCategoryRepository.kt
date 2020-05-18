package no.repairable.backend.repository

import no.repairable.backend.entity.SubCategory
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

@Repository
interface SubCategoryRepository : JpaRepository<SubCategory, Long>