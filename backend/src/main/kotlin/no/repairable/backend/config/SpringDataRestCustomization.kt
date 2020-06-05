package no.repairable.backend.config

import org.springframework.data.rest.core.config.RepositoryRestConfiguration
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurerAdapter
import org.springframework.stereotype.Component


@Component
class SpringDataRestCustomization : RepositoryRestConfigurerAdapter() {
    /**
     *Enables cross-origin request handling for localhost
     */
    override fun configureRepositoryRestConfiguration(config: RepositoryRestConfiguration) {
        config.corsRegistry.addMapping("/**")
                .allowedOrigins("http://localhost:3000")
    }
}