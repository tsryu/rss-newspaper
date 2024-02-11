const Parser = require('rss-parser');

const parser = new Parser();

const fetchRssData = async (url) => {
  const feed = await parser.parseURL(url);
  return feed.items;
};

module.exports = { fetchRssData };