package no.repairable.repository

import no.repairable.entity.Gender
import org.springframework.data.repository.CrudRepository

interface GenderRepository : CrudRepository<Gender, Long>