import NewsService from "../../services/news.service"
import { useEffect, useState } from "react";
import "./News.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import jasonimg from "../../assets/img/jasonimg";
export default function News() {
  const [news, setNews] = useState([]);
  const [editingNews, setEditingNews] = useState(null);

  const getAllnews = () => {
    NewsService.getAllnews().then(data => {
      let allNews = [];
      data.forEach(item => {
        allNews.push({
          key: item.key,
          title: item.val().title,
          content: item.val().content,
          source: item.val().source
        })
      })
      setNews(allNews);
    });
  }

  const removeNews = (key) => {
    NewsService.removeNews(key).then(() => {
      getAllnews();
    });
  }

  const addNews = (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const content = e.target.content.value;
    const source = e.target.source.value;
    NewsService.addNews(title, content, source).then(() => {
      getAllnews();
    })
  }

  const updateNews = (e, key) => {
    e.preventDefault();
    const title = e.target.title.value;
    const content = e.target.content.value;
    const source = e.target.source.value;
    NewsService.updateNews(key, title, content, source).then(() => {
      setEditingNews(null);
      getAllnews();
    });
  }


  useEffect(() => {
    getAllnews();
  }, []);

  return (
    <>
      <Header />
      <div className="title-container">
        <div className="title-text">
          <h1 className="title">NEWS</h1>
        </div>
        <div className="title-img">
          <img src={jasonimg[8]} />
        </div>
      </div>
      <div className="news-insert">
        <div className="news-insert-form">
          <form onSubmit={addNews}>
            <div className="news-insert-form-container">
              <div className="news-insert-form-container-label">
                <label for="title">Title</label>
              </div>
              <div className="news-insert-form-container-input">
                <input type="text" name="title" />
              </div>
              <div className="news-insert-form-container-label">
                <label for="content">Content</label>
              </div>
              <div className="news-insert-form-container-input">
                <input type="text" name="content" />
              </div>
              <div className="news-insert-form-container-label">
                <label for="source">Source</label>
              </div>
              <div className="news-insert-form-container-input">
                <input type="text" name="source" />
              </div>
              <div className="news-insert-form-container-button">
                <button type="submit" className="button"><span>Add News</span></button>
              </div>
            </div>
          </form>
        </div>
      </div>


      {news.map(b =>
          <div className="news-container">
            <div className="news-card">
              <div className="news-card-title">
                <h1>{b.title}</h1>
              </div>
              <div className="news-card-content">
                <p>{b.content}</p>
              </div>
              <div className="news-card-source">
                <h5>{b.source}</h5>
              </div>
              <div className="news-card-buttom">
                <button className="button" id="button-delete" onClick={() => removeNews(b.key)}><span>Delete</span></button>
                <button className="button" id="button-update" onClick={() => setEditingNews(b.key)}><span>Edit</span></button>
              </div>
            </div>
            {editingNews === b.key && (
              <form onSubmit={(e) => updateNews(e, b.key)}>
                <input type="text" name="title" defaultValue={b.brand} />
                <input type="text" name="content" defaultValue={b.content} />
                <input type="text" name="source" defaultValue={b.source} />
                <button type="submit">Actualizar</button>
                <button type="button" onClick={() => setEditingNews(null)}>Cancel</button>
              </form>
            )}
          </div>
      )}
      <Footer />
    </>
  )
}