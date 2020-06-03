package no.repairable.backend.config

import org.springframework.beans.factory.annotation.Autowired
import org.springframework.context.annotation.Bean
import org.springframework.security.authentication.AuthenticationManager
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder
import org.springframework.security.config.annotation.web.builders.HttpSecurity
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter
import org.springframework.security.core.userdetails.UserDetailsService
import org.springframework.security.crypto.password.PasswordEncoder
import javax.sql.DataSource

@EnableWebSecurity
open class WebSecurityConfiguration @Autowired constructor(
        private val passwordEncoder: PasswordEncoder,
        private val dataSource: DataSource
) : WebSecurityConfigurerAdapter() {


    @Throws(Exception::class)
    override fun configure(http: HttpSecurity)
    {
        http
                .authorizeRequests()
                .antMatchers("/built/**", "/main.css").permitAll()
                .and()
                .formLogin()
                .defaultSuccessUrl("/", true)
                    .loginProcessingUrl("/loginapi")
                    .permitAll()
                    .and()
                .httpBasic()
                .and()
                .csrf().disable()
    }



}