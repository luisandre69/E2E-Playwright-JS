import { it, test } from "./fixture"

it("run the basic test of newwin", async ({ context }) => {
    var page = await context.newPage();
    await page.goto("https://www.neowin.net")
})

it("should be skipped for the firefox test", (test, { browserName }) => {
    test.skip(browserName === "firefox", "Skip the test as it doesn't support isMobile option")
}, async ({ page }) => {
    await page.goto("https://www.neowin.net")
})