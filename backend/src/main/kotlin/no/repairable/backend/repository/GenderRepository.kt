package no.repairable.backend.repository

import no.repairable.backend.entity.Gender
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

@Repository
interface GenderRepository : JpaRepository<Gender, Long>