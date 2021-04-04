const playwright = require("playwright");

(async () => {
  const pages = {
    "chromium": await (await playwright.chromium.launch({headless: false})).newPage(),
    "firefox": await (await playwright.firefox.launch({headless: false})).newPage(),
    "webkit": await (await playwright.webkit.launch({headless: false})).newPage(),
  }

  await Promise.all(Object.keys(pages).map(browserName =>
    pages[browserName].goto('http://whatsmyuseragent.org/')
  ))

  await Promise.all(Object.keys(pages).map(browserName =>
    pages[browserName].screenshot({ path: `example-${browserName}.png` })
  ))

  await Promise.all(Object.keys(pages).map(browserName =>
    pages[browserName].close()
  ))
})();