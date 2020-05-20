package no.repairable.backend.repository

import no.repairable.backend.entity.Brand
import org.springframework.data.jpa.repository.JpaRepository

interface BrandRepository : JpaRepository<Brand, Long>