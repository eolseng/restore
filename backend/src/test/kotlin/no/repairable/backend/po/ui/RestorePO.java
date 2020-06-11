package no.repairable.backend.po.ui;

import no.repairable.backend.po.LayoutPO;
import no.repairable.backend.utils.selenium.PageObject;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class RestorePO extends LayoutPO {
    public RestorePO(PageObject other) {
        super(other);
    }

    public RestorePO(WebDriver driver, String host, int port) {
        super(driver, host, port);
    }

    public void toStartingPage() {
        getDriver().get(host + ":" + port);
    }

    @Override
    public boolean isOnPage() {
        return getDriver().getTitle().trim().equalsIgnoreCase("Restore by Repairable");
    }


    public void clickStart() {
        clickAndWait("startBtn");
    }

    public Boolean productsVisible() {
        return getDriver().findElements(By.className("product-card")).size() > 1;
    }

    public void clickFirstProduct() {
        clickAndWait(getDriver().findElements(By.className("product-card")).get(0).getAttribute("id"));
    }


    public void clickFirstSizeOption() {
        getDriver().findElements(By.className("product-description-size")).get(0).click();
    }

    public void clickAddProduct() {
        clickAndWait("btnLeggTil");
    }

    public Boolean isStep2() {
        return getDriver().findElements(By.className("product-description")).size() == 1;
    }




    /*
    public PlayPO startGame(){

        clickAndWait("startGameBtn");
        PlayPO po = new PlayPO(this);
        assertTrue(po.isOnPage());

        return po;
    }

    public AdminPanelPO startAdminPanel(){
        clickAndWait("linkToAdminPanel");
        AdminPanelPO po = new AdminPanelPO(this);
        assertTrue(po.isOnPage());
        return po;
    }

    public ProfilePO startUpdateProfile(){
        clickAndWait("editProfileBtn");
        ProfilePO po = new ProfilePO(this);
        assertTrue(po.isOnPage());
        return po;
    }
    */


}
