import jasonimg from "../../assets/img/jasonimg";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";

const News2 = () => {
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
                    <h2>Junk rain: 100 tons of space junk fall on Earth a year</h2>
                </div>
                <div className="news-body-text">
                    <p>
                        The sky began to spit out metal balls. The first hit Pozorrubio de Santiago, in the province of Cuenca. Another similar object fell that same day on Elda, in Alicante. A few days later, up to three spheres were counted, this time in different parts of the Murcia region. The events were recorded over almost two weeks in November 2015. And although it might seem like a scenario worthy of an apocalyptic story, the truth is that the origin of those fragments, between a few tens of centimeters and four meters in diameter, was very profane. : It was about pieces of space junk that re-entered our planet.
                    </p>
                    <p>
                        Debris accumulates especially in two regions of the firmament, those that offer the greatest advantages for the operation of satellites. 70% of the waste is housed in a strip of space that extends between 200 and 2,000 kilometers high. It is the so-called LEO, low orbit that surrounds the Earth. “It's where the satellites that map the planet for agriculture or climate change observation fly,” explains Fletcher. Here too, at about 400 kilometers above sea level, sails the International Space Station (ISS), a permanently manned research center. Here, the garbage not only endangers the equipment, but, what is worse, the people. Despite the enormous distances involved in space, photographs of space debris "passing next to the ISS" have been taken, as illustrated by the ESA technician. Even more: among other incidents, in 2016 a small ball hit a dome – of course, armored – of the ship, opening a notch of several millimeters in the glass.
                    </p>
                </div>
                <div className="news-body-img">
                    <img src={jasonimg[16]} />
                </div>
            </div>
            <Footer />
        </>
    );
}

export default News2;