import { folio } from "@playwright/test"

const fixtures = folio.extend();

//extending code exist here
fixtures.browserOptions.override(async ({ }, run) => {
    await run({
        headless: false,
        slowMo: 50,
        devtools: true
    })
})

const { it } = fixtures.build();

it("run the basic test of newwin", async ({ context }) => {
    var page = await context.newPage();
    await page.goto("https://www.neowin.net")
})