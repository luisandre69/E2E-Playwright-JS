const { chromium } = require("playwright");  //const { firefox }

(async () => {
  const browser = await chromium.launch({  // await firefox.launch({
    headless: false,
    devtools: true,
    slowMo: 1000,
  });
  const page = await browser.newPage();
  await page.goto("https://executeautomation.com");
  await page.screenshot({ path: "screenshot/ea.png" });
  await browser.close();
})();
