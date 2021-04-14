const { chromium } = require('playwright');
export { expect } from 'folio';

(async () => {
  const browser = await chromium.launch({
    headless: false
  });
  const context = await browser.newContext();

  // Open new page
  const page = await context.newPage();

  // Go to https://demowf.aspnetawesome.com/
  await page.goto('http://www.eaapp.somee.com');

  expect(page.title()).to.contain("Home - Execute Automation Employee App");


  // Close page
  await page.close();

  // ---------------------
  await context.close();
  await browser.close();
})();