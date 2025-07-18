import { formatDate } from "@/utils/formatDate";
import { keywordNotFound } from "@/utils/keywordFound";
import { sliceString } from "@/utils/sliceString";
import { expect, test } from "@playwright/test";
import { mockArticle } from "./mock/mockArticle";

test("has title", async ({ page }) => {
  await page.goto("http://localhost:5173/");
  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/THT Paste Prosmana/);
});

test("Displays data related to the article", async ({ page }) => {
  await page.goto("http://localhost:5173/");

  const articleElements = page.locator("#article");

  for (let i = 0; i < mockArticle.length; i++) {
    const article = mockArticle[i];
    const articleElement = articleElements.nth(i);

    await expect(articleElement.locator("#headline")).toHaveText(
      sliceString(article.headline.main, 100)
    );

    await expect(articleElement.locator("#byline")).toHaveText(
      article.byline.original == ""
        ? "By Anonymous"
        : sliceString(article.byline.original, 40)
    );

    await expect(articleElement.locator("#pub_date")).toHaveText(
      formatDate(article.pub_date)
    );

    await expect(articleElement.locator("#abstract")).toHaveText(
      `${sliceString(article.abstract, 160)} ...`
    );

    await expect(articleElement).toHaveAttribute("href", article.web_url);
  }
});

test("search results for articles about 'Trump' ", async ({ page }) => {
  await page.goto("http://localhost:5173/");

  const articleElements = page.locator("#article");
  await articleElements.first().waitFor();

  const input = page.locator('input[id="search"]');
  await input.fill("trump");

  for (let i = 0; i < mockArticle.length; i++) {
    const article = mockArticle[i];
    const articleElement = articleElements.nth(i);

    await expect(articleElement.locator("#headline")).toHaveText(
      sliceString(article.headline.main, 100)
    );

    await expect(articleElement.locator("#byline")).toHaveText(
      article.byline.original == ""
        ? "By Anonymous"
        : sliceString(article.byline.original, 40)
    );

    await expect(articleElement.locator("#pub_date")).toHaveText(
      formatDate(article.pub_date)
    );

    await expect(articleElement.locator("#abstract")).toHaveText(
      `${sliceString(article.abstract, 160)} ...`
    );

    await expect(articleElement).toHaveAttribute("href", article.web_url);
  }
});

test("The keyword for the article search is invalid.", async ({ page }) => {
  await page.goto("http://localhost:5173/");

  for (let i = 0; i < keywordNotFound.length; i++) {
    const keyword = keywordNotFound[i];

    const input = page.locator('input[id="search"]');
    await input.fill(keyword);

    const articleNotFound = page.locator("#article_not_found");
    await expect(articleNotFound).toBeVisible();
    await expect(articleNotFound).toHaveText(/- No Articles Available -/);
  }
});
