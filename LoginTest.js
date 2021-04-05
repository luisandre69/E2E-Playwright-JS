const  playwright = require('playwright');

(async () =>{
    const browser = await playwright['firefox'].launch({
        headless: false,
        slowMo:50
    });

    const page = await browser.newPage();
    
    await page.goto("https://executeautomation.com");

    await page.screenshot({ path: `screenshot/ea-${Date.now}.png`});

    await browser.close();
})();