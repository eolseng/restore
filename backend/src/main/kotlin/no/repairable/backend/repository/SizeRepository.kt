package no.repairable.backend.repository

import no.repairable.backend.entity.Size
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

@Repository
interface SizeRepository : JpaRepository<Size, Long>