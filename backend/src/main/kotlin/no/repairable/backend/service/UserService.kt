package no.repairable.backend.service

import no.repairable.backend.entity.User
import no.repairable.backend.repository.UserRepository
import org.springframework.security.crypto.password.PasswordEncoder
import org.springframework.stereotype.Service
import javax.transaction.Transactional

@Service
@Transactional
class UserService(
        private val userRepository: UserRepository,
        private val passwordEncoder: PasswordEncoder
) {

    fun createUser(username: String, password: String) : Boolean{
        try{
            val hash = passwordEncoder.encode(password)

            if (userRepository.existsByUserName(username)){
                return false
            }

            val user = User("foo","bar", username, hash)

            userRepository.save(user)

            return true
        }catch (e: Exception){
            return false
        }
    }
}