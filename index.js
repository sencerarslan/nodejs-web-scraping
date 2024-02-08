const puppeteer = require("puppeteer-extra");
const StealthPlugin = require("puppeteer-extra-plugin-stealth");

puppeteer.use(StealthPlugin());

async function start() {
  const browser = await puppeteer.launch({
    headless: true,
    ignoreHTTPSErrors: true,
    args: [
      "--lang=en-US,en;q=0.9",
      "--no-sandbox",
      "--disable-setuid-sandbox",
      "--disable-infobars",
      "--window-position=0,0",
      "--ignore-certificate-errors",
      "--ignore-certificate-errors-spki-list",
    ],
    userDataDir: "./tmp",
  });

  const page = await browser.newPage();

  const baseUrl = "https://www.remax.com.tr/konut/satilik/daire/izmir--35";
  await page.goto(baseUrl);

  let hasNextPage = true;
  let pageNumber = 1;
  const data = [];

  while (hasNextPage) {
    const items = await page.$$(".result-list .item");

    for (const item of items) {
      const title = await item.$eval(".title", (element) => element.textContent.trim());
      const price = await item.$eval(".price-container strong", (element) => element.textContent.trim());

      data.push({ title, price });
    }

    console.log(`Page ${pageNumber} scraped`);

    const nextPageButton = await page.$(".pagination .next");
    if (nextPageButton) {
      await nextPageButton.click();
      await page.waitForNavigation({ waitUntil: "domcontentloaded" });
      pageNumber++;
    } else {
      hasNextPage = false;
    }
  }

  console.log(data);

  await browser.close();
}

start();
