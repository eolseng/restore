package no.repairable.backend.config

import org.springframework.security.config.annotation.web.builders.HttpSecurity
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter

@EnableWebSecurity
open class WebSecurityConfiguration : WebSecurityConfigurerAdapter() {
    @Throws(Exception::class)
    override fun configure(http: HttpSecurity)
    {
        http.csrf().disable()
                .formLogin().loginPage("/login")
                .loginProcessingUrl("/perform_login")
                .defaultSuccessUrl("/restore",true)
                .failureUrl("/index.html?error=true")
    }

}