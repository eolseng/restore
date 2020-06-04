package no.repairable.backend.po;

import no.repairable.backend.po.ui.RestorePO;
import no.repairable.backend.utils.selenium.PageObject;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

import static org.junit.jupiter.api.Assertions.assertTrue;

public class IndexPO extends LayoutPO {
    public IndexPO(PageObject other){
        super(other);
    }

    public IndexPO(WebDriver driver, String host, int port){
        super(driver, host, port);
    }

    public void toStartingPage(){
        getDriver().get(host + ":" + port);
    }

    @Override
    public boolean isOnPage() {
        return getDriver().getTitle().trim().equalsIgnoreCase("Restore by Repairable");
    }


    public boolean isItemsDisplayed(){
        return getDriver().findElements(By.className("rowIdElement")).size() > 19;
    }


    public RestorePO clickStart(){
        clickAndWait("startBtn");
        RestorePO restorePO = new RestorePO(this);
        assertTrue(restorePO.isOnPage());
        return restorePO;
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
