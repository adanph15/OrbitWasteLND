import jasonimg from "../../assets/img/jasonimg";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import './AllNews.css';

const News4 = () => {
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
                    <h2>The Japanese who has the solution to sweep the space</h2>
                </div>
                <div className="news-body-text">
                    <p>
                    This 46-year-old Japanese businessman was dazzled as a teenager by a school visit to NASA in the United States. There he met a compatriot, astronaut Mamoru Mohri. That day he made up his mind that he would work in space before he was forty. And it takes years to work. The project he is working on now is oriented to become the first space sweeper in history.
                    </p>
                    <p>
                    Okada explains in an email from Singapore, where he is based, that the project is a pioneer in its field. He (the space sweeper) will work from Earth directing operations. The dirty work will be done by a satellite that will locate and chase the debris until it is captured with a magnet. It will then drag them into the atmosphere, where in a kamikaze-esque finale, it will burn and disappear along with the cosmic trash.
                    </p>
                    <p>
                    The United States has documented in recent years more than 22,000 objects larger than 5-10 centimeters, 3,600 of which are full satellites, 1,000 of which are operational. Below that size it is very difficult to detect them, but they calculate that some 500,000 pieces between 1 and 10 centimeters fly over our heads. The smallest ones, like a grain of rice or less, would number in the tens of millions. Their small size does not make them less dangerous.
                    </p>
                    <p>
                    NASA has recorded the fall of one piece every day on average. Between 50 and 100 tons per year. The normal thing is that these pieces fall into the sea, which occupies 71% of the earth's surface, or in very large and sparsely populated areas such as Canada or Siberia.
                    </p>
                    <p>
                    Okada now intends to pursue that garbage beyond the Earth's atmosphere in the same way that he has pursued his dream of dedicating himself to space since he was a teenager. In 2013, this former official of the Japanese Ministry of Finance and information technology consultant created the startup Astroscale. He had been attending congresses on aerospace issues for some time and that is when he became aware of galactic debris, a growing concern also in organizations such as NASA and the European Space Agency (ESA), which focus more on keeping this debris under control than on in removing them.
                    </p>
                </div>
                <div className="news-body-img">
                    <img src={jasonimg[14]} />
                </div>
            </div>
            <Footer />
        </>
    );
}

export default News4;