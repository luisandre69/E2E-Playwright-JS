const { chromium } = require("playwright");
(async () => {
  const browser = await chromium.launch({
    headless: false,
  });
  const context = await browser.newContext();
  // Open new page
  const page = await context.newPage();
  // Go to https://www.wikipedia.org/
  await page.goto("https://www.wikipedia.org/");
  // Click input[name="search"]
  await page.click('input[name="search"]');
  // Fill input[name="search"]
  await page.fill('input[name="search"]', "Cristiano Ronaldo");
  // Click button:has-text("Search")
  await page.click('button:has-text("Search")');
  //assert.equal(page.url(), "https://en.wikipedia.org/wiki/Cristiano_Ronaldo");

  await page.screenshot({ path: 'screenshot/wiki.png' });
  // ---------------------
  await browser.close();
})();
