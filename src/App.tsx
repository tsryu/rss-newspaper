import rssData from "./data/rssData.json";
import webContent from "./data/webContent.json";
import { mergeDeepLeft } from "ramda";
import { RSSNews } from "./type/app";

function getFormattedDate() {
  const koreanLocale = "ko-KR";

  const today = new Date();
  const formattedDate = today.toLocaleDateString(koreanLocale);

  return formattedDate;
}

function App() {
  const mergedObj = mergeDeepLeft(rssData, webContent) as RSSNews;

  return (
    <div>
      <div className="head">
        <header>
          <h1 className="title">RSS TIMES</h1>
        </header>
        <div className="subhead">{getFormattedDate()}</div>
      </div>

      <div className="content">
        <div className="categories">
          {Object.entries(mergedObj)?.map(([category, columns]) => {
            return (
              <section key={category} className="category">
                <div className="columns">
                  {Object.entries(columns)?.map(([sectionTitle, articles]) => {
                    return (
                      <section key={sectionTitle} className="column">
                        <div className="head">
                        <div className="headline">{sectionTitle}</div>
                        </div>
                        {articles?.map(
                          ({
                            title,
                            link,
                            // pubDate,
                            // isoDate,
                            // content,
                            // contentSnippet
                          }) => {
                            return (
                              <a
                                href={link}
                                rel="noreferrer"
                                key={title}
                                className="article"
                              >
                                <h3 className="article-title">{title}</h3>
                              </a>
                            );
                          }
                        )}
                      </section>
                    );
                  })}
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
