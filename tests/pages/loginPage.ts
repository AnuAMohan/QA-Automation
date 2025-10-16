import { CommonActions } from "../utils/commonActions"
import { selectors } from "../utils/locators"
import path from 'path';

export class LoginPage extends CommonActions {

    /**
    * Performs login action using the provided email ID and password.
    */
    async loginDetails(user: string) {
        const userDetails = selectors.loginDetails[user as keyof typeof selectors.loginDetails];
        if (!userDetails) throw new Error(`User details not found for key: ${user}`);
        const userName = userDetails.userName;
        const password = userDetails.password;
        await this.interactWithElement("XPATH", selectors.login.usernameField, "fill", userName);
        await this.interactWithElement("XPATH", selectors.login.PwdField, "fill", password);
        await this.interactWithElement("XPATH", selectors.login.continue_submit, "click");
    }
    /**
    * Performs the validation of login success into the application
    */
    async validateloginSuccess() {
        await this.page.waitForLoadState('load');
        await this.page.locator(".app_logo").isVisible();
    }
}
