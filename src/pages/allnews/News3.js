import jasonimg from "../../assets/img/jasonimg";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import './AllNews.css';

const News3 = () => {
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
                    <h2>A laboratory to transform space junk</h2>
                </div>
                <div className="news-body-text">
                    <p>
                        Ongaro was delighted with the collaboration with Roosegaarde, "because in art there are ideas that do not occur to us, and many more people are reached." Could an international Convention on satellites and rockets be drawn up to regulate them? “There is a Sea Treaty, and a Radiocommunication Regulation, which coordinates the frequency bands. At ESA we are already working in this field, and the United Nations is beginning to move in the legal aspect. But we need global agreements, as is the case with the climate”, he points out. Daan Roosegaarde, meanwhile, has opened the Space Debris Laboratory to experts from ESA and NASA, thousands of science students and the general public, "because designing satellites with materials that, to understand each other, we could call natural, will take time." “It will take years to pass security checks, so we must innovate. I want to do something, not just be a consumer. So we look at the possibilities of these debris. Maybe they can be used to build 3D houses on the Moon.”
                    </p>
                    <p>
                        It is not as adventurous as it may seem. There is another visionary who has managed to make his plans come true. It's Boyan Slat, the Dutch entrepreneur hell-bent on cleaning up Plastic Soup, the floating garbage dump of the North Pacific. Its 600-meter barrier, so that the winds and currents carry the waste there, was deployed on September 8 in the San Francisco Bay. Designed by The Ocean Cleanup, it was in a testing period, because its objective is to trap almost 70,000 kilos of plastic during the first year of use. “It is technology, design and imagination. And I think that's how innovation begins. We need everyone's contribution," says Roosegaarde. The Space Debris Laboratory will present its findings on January 19, 2019 at a symposium.
                    </p>
                </div>
                <div className="news-body-img">
                    <img src={jasonimg[15]} />
                </div>
            </div>
            <Footer />
        </>
    );
}

export default News3;