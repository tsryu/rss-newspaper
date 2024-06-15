const parseFunctions = {
  quasarzone: ($) => {
    const content = $(
      ".mid-content-area .tab-con-utit:first-child .right-box ul"
    );
    const output = [];
    content.children("li").each(function (i, elm) {
      const $elm = $(elm).children("a");
      output.push({
        link: "https://quasarzone.com" + $elm.attr("href"),
        title: $elm.text().trim(),
      });
    });
    return output;
  },
};

const webContent = [
  {
    name: "quasarzone",
    url: "https://quasarzone.com",
    category: "etc",
  },
];

module.exports = { webContent, parseFunctions };
