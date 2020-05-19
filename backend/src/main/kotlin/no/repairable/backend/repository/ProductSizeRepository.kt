package no.repairable.backend.repository

import no.repairable.backend.entity.ProductSizes
import org.springframework.data.jpa.repository.JpaRepository

interface ProductSizeRepository : JpaRepository<ProductSizes, Long>