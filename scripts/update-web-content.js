const axios = require("axios");
const cheerio = require("cheerio");
const fs = require("fs");
const path = require("path");

const { webContent, parseFunctions } = require("../src/config/webContent");
const headers = {
  'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:109.0) Gecko/20100101 Firefox/109.0'
}

const updateWebContent = async () => {
  const allContent = {};

  for (const { name, url, category } of webContent) {
    try {
      const response = await axios.get(url, {
        headers
      });
      const $ = cheerio.load(response.data);

      const parseFunction = parseFunctions[name];
      const parsedData = parseFunction($);
      if (!allContent[category]) {
        allContent[category] = {};
      }
      allContent[category][name] = parsedData;
      console.log("Web content updated successfully for:", url);
    } catch (error) {
      console.error("Error fetching web content:", error.message);
    }
  }

  // Write all content to JSON file
  const outputPath = path.resolve(__dirname, "../src/data/webContent.json");
  fs.writeFileSync(outputPath, JSON.stringify(allContent, null, 2));
  console.log("All web content updated successfully.");
};

// Execute the updateWebContent function
updateWebContent();
