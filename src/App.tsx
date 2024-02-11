
import rssData from './data/rssData.json';
import './index.css';

function getFormattedDate() {
  const koreanLocale = 'ko-KR';

  const today = new Date();
  const formattedDate = today.toLocaleDateString(koreanLocale);

  return (formattedDate);
}

function App() {
  return (
    <div>
      <div className="head">
        <header>
          <h1 className='title'>RSS TIMES</h1>
        </header>
        <div className="subhead">
          {getFormattedDate()}
        </div>
      </div>
      
      <div className='content'>
        <div className="columns">
          {Object.entries(rssData)?.map(([sectionTitle, articles]) => {
            return articles?.length > 0 && <section key={sectionTitle} className='column'>
              <div className="head">
                <div className="headline">{sectionTitle}</div>
              </div>
              {articles?.map(({
                title,
                link,
                // pubDate,
                // isoDate,
                // content,
                // contentSnippet
              }) => {
                return (
                <a href={link} target='_blank' rel="noreferrer" key={title} className='article'>
                  <h3 className='article-title'>{title}</h3>
                </a>
                )  
            })}
            </section>
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
