import { it } from "./fixture"

it("run the basic test of newwin", async ({ context }) => {
    var page = await context.newPage();
    await page.goto("https://www.neowin.net")
})