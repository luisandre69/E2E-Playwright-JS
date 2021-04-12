const { chromium } = require("playwright");

(async () => {
  const browser = await chromium.launch({
    headless: false,
  });
  const page = await browser.newPage();
  await page.goto("https://executeautomation.com");
  await page.screenshot({ path: "screenshot/ea.png" });
  await browser.close();
})();
