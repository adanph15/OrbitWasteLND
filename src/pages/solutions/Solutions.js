import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import jasonimg from "../../assets/img/jasonimg";
import "./Solutions.css";
export default function Solutions() {
    return (
        <>  
        <body>
            <Header />
            <div className="title-container">
                <div className="title-text">
                    <h1 className="title">SOLUTIONS</h1>
                </div>
                <div className="title-img">
                    <img src={jasonimg[5]} />
                </div>
            </div>
            <div className="solutions-body">
                <div className="solutions-container">
                    <div class="solutions-items">
                        <div className="solutions-item-text-left">
                            <h2>ELECTRODYNAMIC WIRE</h2>
                            <p>
                            The Japan Space Exploration Agency proposes a satellite to locate pieces of space debris and make them disappear. To do this, it uses a cable that takes advantage of the terrestrial magnetism to drag them and reduce their speed. In this way the remains would "deorbit" to reach the Earth's atmosphere, where they would disintegrate. The creation of the cable has required almost ten years of work by the company Nitto Seimo, specialized in high-quality fishing nets.
                            </p>
                        </div>
                        <div className="solutions-item-text-right">
                            <h2>SIMULATOR ELECTRODYNAMIC MOORING</h2>
                            <p>
                                The European BET project, coordinated by the Polytechnic University of Madrid, and in which the Spanish Tecnalia Foundation also participates, has designed a tether to be attached to the satellites. The goal would be to wind it up like a reel and when the satellite would stop being in use, it would deploy, passively, without using fuel. In this way, its deorbiting and its final disintegration in the atmosphere would be achieved.
                            </p>
                        </div>
                    </div>
                    <div class="solutions-items">
                        <div className="solutions-item-text-left">
                            <h2>LASER</h2>
                            <p>
                                The European Clean Space program, in which a team from the Rovira Virgili University is participating, is working on a laser that could be fired from Earth to eliminate debris between 1 and 20 centimeters. The laser could be ready in about ten years.
                            </p>
                        </div>
                        <div className="solutions-item-text-right">
                            <h2>COLLECTION VEHICLES</h2>
                            <p>
                                The company MacDonald, Dettwiler and Associates has devised a space vehicle that would pick up the scrap and then take it to the base station.
                            </p>
                        </div>
                    </div>

                    <div class="solutions-items">
                        <div className="solutions-item-text-left">
                            <h2>AIR GEL</h2>
                            <p>
                                The US Space Agency has created a lightweight, gel-like synthetic material that solidifies and holds what it touches with it. This air gel was used on the Stardust spacecraft to collect space dust, and it is thought that it could also be used for space debris.
                            </p>
                        </div>
                        <div className="solutions-item-text-right">
                            <h2>HARPOONS</h2>
                            <p>
                                British aerospace company Astrium has proposed a harpoon-shaped instrument to capture the debris and direct it into the atmosphere to disintegrate.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
            </body>
        </>
    );
};