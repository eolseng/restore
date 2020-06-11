package no.repairable.backend.config

import org.springframework.security.config.annotation.web.builders.HttpSecurity
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter

/**
 * Overrides default spring boot security settings.
 */
@EnableWebSecurity
open class WebSecurityConfiguration : WebSecurityConfigurerAdapter() {
    /**
     * Setup security rules for spring boot.
     */
    @Throws(Exception::class)
    override fun configure(http: HttpSecurity) {
        http.csrf().disable()
    }

}