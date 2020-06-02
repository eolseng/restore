package no.repairable.no.repairable.backend.service


import io.restassured.RestAssured
import io.restassured.http.ContentType
import no.repairable.backend.entity.User
import org.hamcrest.CoreMatchers
import org.hamcrest.Matchers
import org.junit.jupiter.api.BeforeEach
import org.junit.jupiter.api.Test
import org.junit.jupiter.api.extension.ExtendWith
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.boot.web.server.LocalServerPort
import org.springframework.test.context.junit.jupiter.SpringExtension

@ExtendWith(SpringExtension::class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
class ApplicationTest {
    @LocalServerPort
    private var port = 0

    @BeforeEach
    fun initialize() {
        RestAssured.baseURI = "http://localhost"
        RestAssured.port = port
        RestAssured.enableLoggingOfRequestAndResponseIfValidationFails()
    }

    @Test
    fun testOpenToAll() {

        RestAssured.given().get("/api/products")
                .then()
                .statusCode(200)
    }

    @Test
    fun testNotPresent() {
        RestAssured.given().get("/NonExistingEndpoint")
                .then()
                .statusCode(404)
    }



    private fun registerUser(id: String, password: String): String {


        val sessionCookie = RestAssured.given().contentType(ContentType.JSON)
                .body(User("foo", "bar" ,id, password))
                .post("/signUp")
                .then()
                .statusCode(204)
                .header("Set-Cookie", CoreMatchers.not(CoreMatchers.equalTo(null)))
                .extract().cookie("SESSION")

        /*
            From now on, the user is authenticated.
            I do not need to use userid/password in the following requests.
            But each further request will need to have the SESSION cookie.
         */

        return sessionCookie
    }

    private fun checkAuthenticatedCookie(cookie: String, expectedCode: Int){
        RestAssured.given().cookie("SESSION", cookie)
                .get("/api/users")
                .then()
                .statusCode(expectedCode)
    }

    @Test
    fun testLogin() {

        val name = "foo"
        val pwd = "bar"

        checkAuthenticatedCookie("invalid cookie", 401)

        val cookie = registerUser(name, pwd)

        RestAssured.given().get("/api/users")
                .then()
                .statusCode(401)

        RestAssured.given().cookie("SESSION", cookie)
                .get("/api/users")
                .then()
                .statusCode(200)
                .body("name", CoreMatchers.equalTo(name))
                .body("roles", Matchers.contains("ROLE_USER"))

    }

}