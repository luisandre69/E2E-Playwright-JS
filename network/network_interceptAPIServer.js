const { chromium } = require("playwright");

const mockResponseObject = {
  posts: [{ id: 1, title: "E2E Playwright", author: "Luis" }],
  comments: [{ id: 1, body: "some comment", postId: 2 }],
  profile: { name: "LA" },
};

(async () => {
  const browser = await chromium.launch({
    headless: false,
  });

  const context = await browser.newContext();

  // Open new page
  const page = await context.newPage();

  await page.route("**/db", (route) =>
    route.fulfill({
      status: 200,
      contentType: "application/json",
      body: JSON.stringify(mockResponseObject),
    })
  );

  await page.goto("http://localhost:3000/posts");

  await browser.close();
})();
