package no.repairable.backend.service

import no.repairable.backend.entity.User
import no.repairable.backend.repository.UserRepository
import org.apache.catalina.Manager
import org.springframework.security.core.authority.AuthorityUtils
import org.springframework.security.core.authority.AuthorityUtils.createAuthorityList
import org.springframework.security.core.userdetails.UserDetails
import org.springframework.security.core.userdetails.UserDetailsService
import org.springframework.security.core.userdetails.UsernameNotFoundException
import org.springframework.security.crypto.password.PasswordEncoder
import org.springframework.stereotype.Service
import javax.transaction.Transactional


@Service
@Transactional
class UserService(
        private val userRepository: UserRepository,
        private val passwordEncoder: PasswordEncoder
) : UserDetailsService {

    fun createUser(username: String, password: String) : Boolean{
        try{
            val hash = passwordEncoder.encode(password)

            if (userRepository.existsByUsername(username)){
                return false
            }

            val user = User("foo","bar", username, hash)

            userRepository.save(user)

            return true
        }catch (e: Exception){
            return false
        }
    }


    @Throws(UsernameNotFoundException::class)
    override fun loadUserByUsername(name: String): UserDetails? {
        var user = userRepository.findByUsername(name)
        return org.springframework.security.core.userdetails.User(user.username, user.password, AuthorityUtils.createAuthorityList("ADMIN"))
    }
}