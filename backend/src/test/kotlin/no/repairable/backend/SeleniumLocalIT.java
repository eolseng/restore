package no.repairable.backend;

import no.repairable.RestoreApplication;
import no.repairable.backend.utils.selenium.SeleniumDriverHandler;
import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.extension.ExtendWith;
import org.openqa.selenium.WebDriver;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import static org.junit.jupiter.api.Assumptions.assumeTrue;
import static org.springframework.boot.test.context.SpringBootTest.WebEnvironment.RANDOM_PORT;


//Copied from: https://github.com/arcuri82/testing_security_development_enterprise_systems/blob/master/intro/exercise-solutions/quiz-game/part-11/frontend/src/test/java/org/tsdes/intro/exercises/quizgame/selenium/SeleniumLocalIT.java
@ActiveProfiles("test")
@ExtendWith(SpringExtension.class)
@SpringBootTest(classes = RestoreApplication.class, webEnvironment = RANDOM_PORT)
public class SeleniumLocalIT extends SeleniumTestBase {

    private static WebDriver driver;

    @LocalServerPort
    private int port;

    @BeforeAll
    public static void initClass() {

        driver = SeleniumDriverHandler.getChromeDriver();
        assumeTrue(driver != null, "Cannot find/initialize Chrome driver");
    }

    @AfterAll
    public static void tearDown() {
        if (driver != null) {
            driver.close();
        }
    }

    @Override
    protected WebDriver getDriver() {
        return driver;
    }

    @Override
    protected String getServerHost() {
        return "localhost";
    }

    @Override
    protected int getServerPort() {
        return port;
    }


}
