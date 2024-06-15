const fs = require("fs");
const path = require("path");
const { fetchRssData } = require("../src/utils/rssUtil");
const rssFeeds = require("../src/config/rssFeeds");

const updateRssData = async () => {
  const allItems = {};

  for (const { name, url, category } of rssFeeds) {
    const items = await fetchRssData(url);
    if (!allItems[category]) {
      allItems[category] = {};
    }
    allItems[category][name] = items;
  }

  const outputPath = path.resolve(__dirname, "../src/data/rssData.json");
  fs.writeFileSync(outputPath, JSON.stringify(allItems, null, 2));

  console.log("RSS data updated successfully.");
};

updateRssData();
