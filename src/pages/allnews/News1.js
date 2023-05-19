import jasonimg from "../../assets/img/jasonimg";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";

const News1 = () => {
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
                    <h2>ESA will launch the first satellite to remove space debris in 2025</h2>
                </div>
                <div className="news-body-text">
                    <p>
                        After fifty years of launching objects into space, the Earth's orbit, which seemed immense, is beginning to be saturated. Some 22,000 objects considered space junk have already been catalogued, there are more than 2,000 satellites in operation and 3,000 out of service. And those responsible for regulating space traffic do not treat the threat as something hypothetical. Every year, 14 million euros are spent on diverting satellites to avoid collisions, although the European Space Agency (ESA) acknowledges that 99% of these warnings are false alarms.
                    </p>
                    <p>
                        In addition to improving its predictive methods, Europe is already planning the first mission to take space junk out of orbit. ClearSpace-1, a mission to be led by the Swiss company ClearSpace, is scheduled to be launched in 2025 and will aim to remove the Vespa upper stage, a piece of the Vega rocket with which ESA launches its satellites that was abandoned at an altitude of between 660 and 800 kilometers in a 2013 launch. Its mass, 100 kilograms, is similar to that of a small satellite and, as it is a simple and resistant object, it is a good candidate for this first test. In the future, as explained by the ESA in a note, larger catches and operations in which various artifacts are cleaned will be sought.
                    </p>
                    <p>
                        ClearSpace-1 will first be launched into a lower orbit of 500 kilometers altitude, where it will perform some critical tests and fine-tuning before ascending into its final orbit to meet its target. After tying it up with its four robotic arms, it will launch itself into the atmosphere to disintegrate along with its capture. In the future, attempts will be made to make the system reusable.
                    </p>
                    <p>
                        Space debris specialists at ESA and NASA are convinced that the “only way to stabilize the orbital environment is to actively remove large debris,” said Luisa Innocenti, head of ESA's Clean Space initiative. In the current situation, "even if all launches into space are stopped tomorrow, projections show that the total population of orbital debris will continue to grow, since collisions between objects generate new debris through a cascading effect," he added.
                    </p>
                    <p>
                        With the new mission, ESA intends to “further develop essential guidance, navigation and control technologies, as well as rendezvous and capture methods, through a new project called ADRIOS (Active Debris Disposal/Services in Orbit). The results will be applied to ClearSpace-1, which will make it possible to demonstrate [the effectiveness of] these technologies”, concluded Innocenti.
                    </p>
                    <p>
                        ESA has other projects to reduce the space debris problem, such as the laser telescope it plans to install on Teide to track fragments of orbital junk and which in the future could function as a cannon to remove the most threatening pieces of space debris. The idea would consist of diverting the objects so that they fall into the atmosphere and disintegrate by friction. This and other systems will try to address a need that until recently was seen as a problem for the future, but is beginning to be considered urgent.
                    </p>
                </div>
                <div className="news-body-img">
                    <img src={jasonimg[17]} />
                </div>
            </div>
            <Footer />
        </>
    );
}

export default News1;