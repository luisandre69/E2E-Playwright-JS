const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({
    headless: false
  });
  const context = await browser.newContext();

  // Open new page
  const page = await context.newPage();

  // Go to https://demowf.aspnetawesome.com/
  await page.goto('https://demowf.aspnetawesome.com/');

  // Click input[name="ctl00$ContentPlaceHolder1$Meal"]
  await page.click('input[name="ctl00$ContentPlaceHolder1$Meal"]');

  // Fill input[name="ctl00$ContentPlaceHolder1$Meal"]
  await page.fill('input[name="ctl00$ContentPlaceHolder1$Meal"]', 'Mango');

  await page.click('input[name="ctl00$ContentPlaceHolder1$Meal"]')

  // Click div[id="ContentPlaceHolder1_Meal-dropmenu"] >> text=/.*Mango.*/
  await page.click('div[id="ContentPlaceHolder1_Meal-dropmenu"] >> text=/.*Mango.*/');

  // Click //button[normalize-space(.)='Mango']/div[2]/i
  await page.click('//button[normalize-space(.)=\'Mango\']/div[2]/i');

  // Click div[id="ContentPlaceHolder1_AllMeals-dropmenu"] >> text=/.*Papaya.*/
  await page.click('div[id="ContentPlaceHolder1_AllMeals-dropmenu"] >> text=/.*Papaya.*/');

  // Select 189
  await page.selectOption('select[id="ContentPlaceHolder1_Add1-awed"]', '189');

  // Click text="Legumes"
  await page.click('text="Legumes"');

  // Click //label[normalize-space(.)='Broccoli']/div[1]/div/div
  await page.check('//label[normalize-space(.)=\'Broccoli\']/div[1]/div/div');

  // Click //label[normalize-space(.)='Artichoke']/div[1]/div/div
  await page.check('//label[normalize-space(.)=\'Artichoke\']/div[1]/div/div');

  // Click //label[normalize-space(.)='Celery']/div[1]/div/div
  await page.click('//label[normalize-space(.)=\'Celery\']/div[1]/div/div');

  // Click //label[normalize-space(.)='Lettuce']/div[1]/div/div
  await page.click('//label[normalize-space(.)=\'Lettuce\']/div[1]/div/div');

  // Click text="×"
  await page.click('text="×"');

  // Click text="×"
  await page.click('text="×"');

  // Click text="×"
  await page.click('text="×"');

  // Click //div[3]/div[3]/div[2]/div/div/div[2]/div/button[normalize-space(.)='please select']/div[2]/i
  await page.click('//div[3]/div[3]/div[2]/div/div/div[2]/div/button[normalize-space(.)=\'please select\']/div[2]/i');

  // Click //li[normalize-space(.)='node 2669']/i
  await page.click('//li[normalize-space(.)=\'node 2669\']/i');

  // Click text="Mongongo 2673"
  await page.click('text="Mongongo 2673"');

  // Close page
  await page.close();

  // ---------------------
  await context.close();
  await browser.close();
})();