const parseFunctions = {
  uppercase: (content) => content.toUpperCase(),
  lowercase: (content) => content.toLowerCase(),
  // Add more parse functions as needed
};

const webContentConfig = [
  {
    websiteUrl: 'https://example1.com',
    targetSelector: '.selector1',
    parseFunctionKey: 'uppercase'
  },
  {
    websiteUrl: 'https://example2.com',
    targetSelector: '.selector2',
    parseFunctionKey: 'lowercase'
  }
  // Add more configurations as needed
];

module.exports = { webContentConfig, parseFunctions };