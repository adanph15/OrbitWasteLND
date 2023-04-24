
import CarouselSatelite from "../../components/Carrusel/CarouselSatelite";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import "./Home.css";
export default function Home() {
    return (
        <>
            <Header />
            <div className="home-tittle">
                <h2>Types Of Satellites</h2>
                <p>Orbital debris is any human-made object in orbit about the Earth that no longer serves a useful function. 
                    Such debris includes nonfunctional spacecraft, abandoned launch vehicle stages, mission-related debris, and fragmentation debris.
                    There are approximately 23,000 pieces of debris larger than a softball orbiting the Earth. 
                    They travel at speeds up to 17,500 mph, fast enough for a relatively small piece of orbital debris to damage a satellite or a spacecraft.</p>
            
            </div>


            <div className="home-tittle"><h2>Types Of Satellites</h2></div>
            <CarouselSatelite />
            <Footer />
        </>
    );
};