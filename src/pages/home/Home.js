import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import "./Home.css";
import jasonimg from "../../assets/img/jasonimg";
export default function Home() {
  return (
    <>
      <Header />
      <div className="title-container">
        <div className="title-text">
          <h1 className="title">HOME</h1>
        </div>
        <div className="title-img">
          <img src={jasonimg[7]} />
        </div>
      </div>
      <div className="home-body">
        <div className="home-container-left">
          <div className="home-tittle">
            <h2>WHAT IS THE SPACE WASTE?</h2>
            <p>Space waste, or orbital debris, is any piece of machinery or debris left behind by humans in space. It can refer to large objects, such as dead satellites that failed or were left in orbit at the end of their mission. It can also refer to smaller things, such as pieces of debris or blobs of paint that have fallen from a rocket.</p>
          </div>
          <div className="image-container">
            <img src={jasonimg[4]} />
          </div>
        </div>
        <div className="home-container-right">
          <div className="home-tittle">
            <h2>TYPES OF SPACE WASTE</h2>
            <p>Orbital debris is any human-made object in orbit about the Earth that no longer serves a useful function.
              Such debris includes nonfunctional spacecraft, abandoned launch vehicle stages, mission-related debris, and fragmentation debris.
              There are approximately 23,000 pieces of debris larger than a softball orbiting the Earth.
              They travel at speeds up to 17,500 mph, fast enough for a relatively small piece of orbital debris to damage a satellite or a spacecraft.</p>

          </div>
          <div className="box-container">
            <div class="flip-box">
              <div class="flip-box-inner">
                <div class="flip-box-front">
                  <h2>Inactive Satellites</h2>
                  <p>When the batteries run out or break down, they are left floating aimlessly through space. At first, it was thought that they would be destroyed on reentry, but in high orbits it has been found that this could not happen.</p>
                </div>
                <div class="flip-box-back">
                  <img src={jasonimg[0]} />
                </div>
              </div>
            </div>
            <div class="flip-box">
              <div class="flip-box-inner">
                <div class="flip-box-front">
                  <h2>Rocket Phases or Stages.</h2>
                  <p>Physical remains of missions carried out in the past that have also been the result of collisions or deterioration over the years.</p>
                </div>
                <div class="flip-box-back">
                  <img src={jasonimg[1]} />
                </div>
              </div>
            </div>
            <div class="flip-box">
              <div class="flip-box-inner">
                <div class="flip-box-front">
                  <h2>Lost tools</h2>
                  <p>There are parts of the equipment that are lost through space. In 2008, astronaut Stefanyshyn-Piper let go of a toolbox. A year later, it disintegrated upon contact with the atmosphere.</p>
                </div>
                <div class="flip-box-back">
                  <img src={jasonimg[2]} />
                </div>
              </div>
            </div>
            <div class="flip-box">
              <div class="flip-box-inner">
                <div class="flip-box-front">
                  <h2>Armament</h2>
                  <p>In the 1960s and 1970s, both the United States and the Soviet Union were testing anti-satellite weapons.</p>
                </div>
                <div class="flip-box-back">
                  <img src={jasonimg[3]} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};