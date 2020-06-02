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
        http.csrf().disable()
                .formLogin().loginPage("/login")
                .loginProcessingUrl("/perform_login")
                .defaultSuccessUrl("/restore",true)
                .failureUrl("/index.html?error=true")
    }


    @Bean
    @Throws(java.lang.Exception::class)
    override fun userDetailsServiceBean(): UserDetailsService? {
        return super.userDetailsServiceBean()
    }

    @Bean
    @Throws(java.lang.Exception::class)
    override fun authenticationManagerBean(): AuthenticationManager? {
        return super.authenticationManagerBean()
    }


    override fun configure(auth: AuthenticationManagerBuilder) { /*
            Here, we need to tell Spring Security how to access the SQL database
            to check the username and the hashed password when trying to authenticate
            a user.
         */
        try {
            auth.jdbcAuthentication()
                    .dataSource(dataSource)
                    .usersByUsernameQuery(
                            "SELECT username, password, enabled " +
                                    "FROM users " +
                                    "WHERE username = ?"
                    )
                    .authoritiesByUsernameQuery(
                            "SELECT x.username, y.roles " +
                                    "FROM users x, user_entity_roles y " +
                                    "WHERE x.username = ? and y.user_entity_username = x.username "
                    ) /*
                        Note: in BCrypt, the "password" field also contains the salt
                     */
                    .passwordEncoder(passwordEncoder)
        } catch (e: java.lang.Exception) {
            throw RuntimeException(e)
        }
    }

}