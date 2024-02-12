const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');
const path = require('path');

const { webContentConfig, parseFunctions } = require('./config/webContent');

const updateWebContent = async (config) => {
  const { websiteUrl, targetSelector, parseFunctionKey } = config;

  try {
    const response = await axios.get(websiteUrl);
    const $ = cheerio.load(response.data);
    const content = $(targetSelector).html();

    if (content) {
      const parseFunction = parseFunctions[parseFunctionKey];
      const parsedData = parseFunction(content);
      const outputPath = path.resolve(__dirname, '../src/data/webContent.json');
      fs.writeFileSync(outputPath, JSON.stringify({ content: parsedData }, null, 2));
      console.log('Web content updated successfully for:', websiteUrl);
    } else {
      console.error('Target content not found on the website:', websiteUrl);
    }
  } catch (error) {
    console.error('Error fetching web content:', error.message);
  }
};

// Process each configuration
for (const config of webContentConfig) {
  updateWebContent(config);
}