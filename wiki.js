const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({
    headless: true
  });
  const context = await browser.newContext();

  // Open new page
  const page = await context.newPage();

  // Go to https://www.wikipedia.org/
  await page.goto('https://www.wikipedia.org/');

  // Click input[name="search"]
  await page.click('input[name="search"]');

  // Fill input[name="search"]
  await page.fill('input[name="search"]', 'Apple M1');

  // Click text="Apple M1"
  await page.click('text="Apple M1"');
  // assert.equal(page.url(), 'https://en.wikipedia.org/wiki/Apple_M1');

  // Click text="Apple M1"
  await page.click('text="Apple M1"');

  // Click text="Architecture"
  await page.click('text="Architecture"');
  // assert.equal(page.url(), 'https://en.wikipedia.org/wiki/Apple_M1#Architecture');

  await page.screenshot({path: `screenshot/wiki2.png`})

  // Close page
  await page.close();

  // ---------------------
  await context.close();
  await browser.close();
})();