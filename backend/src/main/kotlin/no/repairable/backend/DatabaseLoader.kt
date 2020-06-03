package no.repairable.backend

import no.repairable.backend.entity.BaseColor
import no.repairable.backend.repository.BaseColorRepository
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.CommandLineRunner
import org.springframework.core.annotation.Order
import org.springframework.stereotype.Component
import javax.annotation.PostConstruct

@Order(1)
@Component
class DatabaseLoader @Autowired constructor(
        private val baseColorRepository: BaseColorRepository
) : CommandLineRunner{

    override fun run(vararg args: String?) {
        insertBaseColors()
    }

    private fun insertBaseColors() {
        val baseColorNames: List<String> = mutableListOf("other", "grey", "red", "blue", "navy", "white", "black", "green", "yellow", "brown", "orange", "pink", "purple")
        val baseColors = mutableListOf<BaseColor>()
        for (name in baseColorNames) {
            val baseColor = BaseColor(name = name)
            baseColors.add(baseColor)
        }
        baseColorRepository.saveAll(baseColors)
    }

}
