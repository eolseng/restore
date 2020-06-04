import org.h2.tools.Restore;
import org.springframework.boot.SpringApplication;

//Copied from: https://github.com/arcuri82/testing_security_development_enterprise_systems/blob/master/intro/exercise-solutions/quiz-game/part-11/frontend/src/test/java/org/tsdes/intro/exercises/quizgame/LocalApplicationRunner.java
public class LocalApplicationRunner {

    public static void main(String[] args) {
        SpringApplication.run(Restore.class, "--spring.profiles.active=test");
    }
}