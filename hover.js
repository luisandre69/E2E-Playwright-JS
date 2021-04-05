const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({
    headless: false
  });
  const context = await browser.newContext();

  // Open new page
  const page = await context.newPage();

  // Go to https://demosite.executeautomation.com/Login.html
  await page.goto('https://demosite.executeautomation.com/Login.html');

  // Click input[name="UserName"]
  await page.click('input[name="UserName"]');

  // Fill input[name="UserName"]
  await page.fill('input[name="UserName"]', 'admin');

  // Press Tab
  await page.press('input[name="UserName"]', 'Tab');

  // Fill input[name="Password"]
  await page.fill('input[name="Password"]', 'password');

  // Click input[name="Login"]
  await page.click('input[name="Login"]');
  // assert.equal(page.url(), 'https://demosite.executeautomation.com/index.html?UserName=admin&Password=password&Login=Login');





  // Click //a[normalize-space(.)='Specflow']
  await page.hover('text="Automation Tools"');

  // assert.equal(page.url(), 'https://demosite.executeautomation.com/index.html?UserName=admin&Password=password&Login=Login#');

  // Close page
  await page.close();

  // ---------------------
  await context.close();
  await browser.close();
})();