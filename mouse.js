const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({
    headless: false
  });
  const context = await browser.newContext();

  // Open new page
  const page = await context.newPage();

  // Go to https://demosite.executeautomation.com/index.html
  await page.goto('https://demosite.executeautomation.com/index.html');

  // Click text=Specflow
  await page.click('text=Specflow');
  // assert.equal(page.url(), 'https://demosite.executeautomation.com/index.html#');

  // Click text=User Form
  await page.click('text=User Form');
  // assert.equal(page.url(), 'https://demosite.executeautomation.com/index.html');

  // Select 1
  await page.selectOption('select[name="TitleId"]', '1');

  // Click input[name="Initial"]
  await page.click('input[name="Initial"]');

  // Fill input[name="Initial"]
  await page.fill('input[name="Initial"]', 'test');

  // Click input[name="Initial"]
  await page.click('input[name="Initial"]');

  // Double click input[name="Initial"]
  await page.dblclick('input[name="Initial"]');

  // Triple click input[name="Initial"]
  await page.click('input[name="Initial"]', {
    clickCount: 3
  });

  // Fill input[name="Initial"]
  await page.fill('input[name="Initial"]', 'LA');

  // Press Tab
  await page.press('input[name="Initial"]', 'Tab');

  // Fill input[name="FirstName"]
  await page.fill('input[name="FirstName"]', 'Luis');

  // Click input[name="FirstName"]
  await page.click('input[name="FirstName"]');

  // Click input[name="FirstName"]
  await page.click('input[name="FirstName"]');

  // Click input[name="MiddleName"]
  await page.click('input[name="MiddleName"]');

  // Fill input[name="MiddleName"]
  await page.fill('input[name="MiddleName"]', 'Abreu');

  // Click text=Save
  await page.click('text=Save');

  // Click text=Generate
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.click('text=Generate');

  // ---------------------
  await context.close();
  await browser.close();
})();