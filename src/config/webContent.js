const parseFunctions = {
  Quasarzone: ($) => {
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
  "Naver World Football": ($) => {
    const content = $("#_ranking_news_list_0");
    const output = [];
    content.children("li").each(function (i, elm) {
      const $elm = $(elm).children("a");
      output.push({
        link: $elm.attr("href"),
        title: $elm.text().trim(),
      });
    });
    return output;
  },
  Mule: ($) => {
    const content = $(".browse-wrapper+.board-list-wrapper tbody");
    const output = [];
    content.children("tr").each(function (i, elm) {
      const $elm = $(elm).find(".title a");
      $elm.find('span, div').remove();
      const link = $elm.attr("href");
      if (link) {
        output.push({
          link: `https://www.mule.co.kr${link}`,
          title: $elm.text().trim(),
        });
      }
    });
    return output;
  },
  // NOTE: cheerio는 dynamic content를 parse못함
  KinoLights: ($) => {
    const content = $(".ranking-list-wrap .ranking-container");
    const output = [];
    content.children("li").each(function (i, elm) {
      const $elm = $(elm).querySelector("a");
      output.push({
        link: $elm.attr("href"),
        title: $elm.querySelector(".info__title").text().trim(),
      });
    });
    return output;
  },
};

const webContent = [
  {
    name: "Quasarzone",
    url: "https://quasarzone.com",
    category: "etc",
  },
  {
    name: "Naver World Football",
    url: "https://sports.news.naver.com/wfootball/news/index?isphoto=N&type=popular",
    category: "news",
  },
  {
    name: "Mule",
    url: "https://www.mule.co.kr/best/weekly",
    category: "etc",
  },
  // {
  //   name: "Kinolights",
  //   url: "https://m.kinolights.com/ranking/kino",
  //   category: "etc",
  // }
];

module.exports = { webContent, parseFunctions };
