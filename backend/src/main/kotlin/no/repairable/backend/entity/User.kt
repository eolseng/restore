package no.repairable.backend.entity

import net.minidev.json.annotate.JsonIgnore
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.security.crypto.password.PasswordEncoder
import java.util.*
import javax.persistence.*

@Entity
@Table(name = "user")
class User constructor(firstName: String, lastName : String, username: String, password: String) {

        @Autowired
        private lateinit var passwordEncoder: PasswordEncoder;

        @Id
        @GeneratedValue
        @Column(name = "id")
        val id: Long? = null
        val firstName: String = firstName
        val lastName:String = lastName
        val userName:String = username

        @JsonIgnore
        var password:String = password
                get() = field
                set(value) { field = passwordEncoder.encode(value)}

        //val roles: List<String> = mutableListOf()

        //@OneToMany(mappedBy = "user")
        //val orders:MutableList<Order> = mutableListOf()

        override fun equals(o: Any?): Boolean {
                if (this === o) return true
                if (o == null || javaClass != o.javaClass) return false
                val user: User = o as User
                return Objects.equals(id, user.id) &&
                        Objects.equals(firstName, user.firstName) &&
                        Objects.equals(lastName, user.lastName)
        }

        override fun hashCode(): Int {
                return Objects.hash(id, firstName, lastName)
        }

        override fun toString(): String {
                return super.toString()
        }
}