package no.repairable.backend.entity

import net.minidev.json.annotate.JsonIgnore
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.security.crypto.password.PasswordEncoder
import java.util.*
import javax.persistence.*

@Entity
@Table(name = "user")
class User(
        val firstName: String?,
        val lastName:String?,
        val userName:String?,

        @JsonIgnore
        var password:String?

        //val roles: List<String> = mutableListOf()

        //@OneToMany(mappedBy = "user")
        //val orders:MutableList<Order> = mutableListOf()

){
        @Id
        @GeneratedValue
        @Column(name = "id")
        val id: Long? = null
}