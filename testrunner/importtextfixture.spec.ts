import { it, describe } from "./fixture"
const { expect } = require('chai');

describe("test", async () => {
    it("run the basic test of newwin", async ({ context }) => {
        var page = await context.newPage();
        await page.goto("https://www.neowin.net")
    })

    it.only("should be skipped for the firefox test", (test, { browserName }) => {
        test.skip(browserName === "firefox", "Skip the test as it doesn't support isMobile option")
    }, async ({ page }) => {

        // Go to https://demowf.aspnetawesome.com/
        await page.goto('http://www.eaapp.somee.com');

        expect(page.title()).to.contain("Home - Execute Automation Employee App");

    })

})