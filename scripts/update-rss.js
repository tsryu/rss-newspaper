const fs = require('fs');
const path = require('path');
const { fetchRssData } = require('../src/utils/rssUtil');
const rssFeeds = require('../src/config/rssFeeds');

const updateRssData = async () => {
  const allItems = {};

  for (const [title, url] of Object.entries(rssFeeds)) {
    const items = await fetchRssData(url);
    allItems[title] = items;
  }


  const outputPath = path.resolve(__dirname, '../src/data/rssData.json');
  fs.writeFileSync(outputPath, JSON.stringify(allItems, null, 2));

  console.log('RSS data updated successfully.');
};

updateRssData();