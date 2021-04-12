const { chromium, devices } = require("playwright");
const iPhone = devices["iPhone 11 Pro Max"];

(async () => {
  const browser = await chromium.launch({
    headless: false,
  });

  const context2 = await browser.newContext();

  // Open new page
  const page2 = await context2.newPage();

  await page2.goto("https://luisabreu.co.uk");
  await page2.screenshot({ path: "screenshot/luis.png" });

  const context = await browser.newContext({
    ...iPhone,
    permissions: ["geolocation"],
    geolocation: { latitude: 52.52, longitude: 13.39 },
    colorScheme: "dark",
  });

  // Open new page
  const page = await context.newPage();

  // Go to https://www.wikipedia.org/
  await page.goto("https://www.wikipedia.org/");

  // Click input[name="search"]
  await page.click('input[name="search"]');

  // Fill input[name="search"]
  await page.fill('input[name="search"]', "Apple M1");

  // Click text="Apple M1"
  await page.click('text="Apple M1"');
  // assert.equal(page.url(), 'https://en.wikipedia.org/wiki/Apple_M1');

  // Click text="Apple M1"
  await page.click('text="Apple M1"');

  await page.screenshot({ path: `screenshot/wiki2.png` });

  // Close page
  await page.close();
  await page2.close();

  // ---------------------
  await context.close();
  await context2.close();
  await browser.close();
})();
