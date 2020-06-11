package no.repairable.backend.po;

import no.repairable.backend.utils.selenium.PageObject;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

//Testbase copied from: https://github.com/arcuri82/testing_security_development_enterprise_systems/blob/master/intro/exercise-solutions/quiz-game/part-11/frontend/src/test/java/org/tsdes/intro/exercises/quizgame/selenium/SeleniumTestBase.java
public abstract class LayoutPO extends PageObject {

    public LayoutPO(WebDriver driver, String host, int port) {
        super(driver, host, port);
    }

    public LayoutPO(PageObject other) {
        super(other);
    }


    public boolean isLoggedIn() {
        return getDriver().findElements(By.id("logoutId")).size() > 0 &&
                getDriver().findElements((By.id("linkToSignupId"))).isEmpty();
    }

    public boolean isAdminBtnAvailable() {
        return getDriver().findElements(By.id("linkToAdminPanel")).size() == 1;
    }
}
