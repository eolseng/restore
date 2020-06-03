package no.repairable.backend

import no.repairable.backend.entity.BaseColor
import no.repairable.backend.repository.BaseColorRepository
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Component
import javax.annotation.PostConstruct

@Component
class DatabaseLoader @Autowired constructor(
        private val baseColorRepository: BaseColorRepository
) {

    @PostConstruct
    fun onStartDataBaseLoader() {
        baseColorRepository.save(BaseColor(name = "other"))
    }

}