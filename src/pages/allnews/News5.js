import jasonimg from "../../assets/img/jasonimg";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import './AllNews.css';

const News5 = () => {
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
            <div className="news-body">
                <div className="news-body-title">
                    <h2>The remains of a Chinese rocket, visible from various points in Spain when crossing the sky</h2>
                </div>
                <div className="news-body-text">
                    <p>
                    The re-entry into the atmosphere of the remains of the Chinese CZ-2F space rocket has been visible this past dawn from various points in Spain and Portugal when they crossed the sky. The material from the device has been filmed in various areas of Andalusia, such as Cádiz, Seville, Huelva, Granada or Málaga, as well as Madrid, Toledo or Murcia.
                    </p>
                    <p>
                    The remains of the rocket, which ignited when tearing through the atmosphere, were visible around 00:30 (Spanish peninsular time) this Tuesday, according to the China News Service agency and the specialized media Frontera Espacial. According to this medium, the rocket launched the Shenzhou-14 manned spacecraft to the Chinese Space Station at the beginning of June. The remains have been visible for several minutes.
                    </p>
                </div>
                <div className="news-body-img">
                    <img src={jasonimg[13]} />
                </div>
            </div>
            <Footer />
        </>
    );
}

export default News5;