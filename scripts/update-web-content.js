const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');
const path = require('path');

const { webContent, parseFunctions } = require('../src/config/webContent');

const updateWebContent = async () => {
  const allContent = {};

  for (const [title, url] of Object.entries(webContent)) {
    try {
      const response = await axios.get(url);
      const $ = cheerio.load(response.data);

      const parseFunction = parseFunctions[title];
      const parsedData = parseFunction($);
      allContent[title] = parsedData;
      console.log('Web content updated successfully for:', url);
    } catch (error) {
      console.error('Error fetching web content:', error.message);
    }
  }

  // Write all content to JSON file
  const outputPath = path.resolve(__dirname, '../src/data/webContent.json');
  fs.writeFileSync(outputPath, JSON.stringify(allContent, null, 2));
  console.log('All web content updated successfully.');
};

// Execute the updateWebContent function
updateWebContent();