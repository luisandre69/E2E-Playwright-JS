import { it, describe, expect } from "@playwright/test"
import { LoginPage } from '../pages/LoginPage';
const data = require('../testData/eadata.json')

describe("Run basic E2E EA App site test", async () => {

    it("Navigate and Login EA App site", async ({ context }) => {

        let page = await context.newPage();
        await page.goto("http://www.eaapp.somee.com");
        //create an instance of the LoginPage
        let loginPage = new LoginPage(page);
        await loginPage.ClickLogin();
        await loginPage.Login(data.Login.UserName, data.Login.Password);
        await page.screenshot({ path: `eappp.jpg` })
    });

});