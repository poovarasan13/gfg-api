const puppeteer = require("puppeteer");

const scrapeProfile = async (profileUrl) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  try {
    await page.goto(profileUrl, { waitUntil: "load", timeout: 0 });

    const userInfo = await page.evaluate(() => {
      const username =
        document.querySelector(".profile-title")?.innerText || "N/A";
      const codingScore =
        document.querySelector(".score_card_value")?.innerText || "N/A";
      const solvedProblems =
        document.querySelector(".score_card_subtitle span")?.innerText || "N/A";
      const rank =
        document.querySelector(".rank_card_value")?.innerText || "N/A";

      return {
        username,
        codingScore,
        solvedProblems,
        rank,
      };
    });
    console.log(userInfo);
  } catch (error) {
    console.error("error while fetching data: " + error);
  } finally {
    await browser.close();
  }
};

scrapeProfile("https://auth.geeksforgeeks.org/user/siranjeevi0619/");
