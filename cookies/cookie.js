const { chromium } = require("playwright");
const fs = require("fs");

(async () => {
  const browser = await chromium.launch({
    headless: false,
    devtools: true,
  });
  const context = await browser.newContext();
  const cookie = JSON.parse(fs.readFileSync("./cookie.json", "utf8"));
  await context.addCookies(cookie);

  const page = await context.newPage();
  await page.goto("http://eaapp.somee.com/EMployee/Create");

  //   await browser.close();
})();
