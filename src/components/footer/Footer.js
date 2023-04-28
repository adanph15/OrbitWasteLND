import "./Footer.css";
import { FaTwitterSquare, FaGithubSquare } from "react-icons/fa";
export default function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div>
          <h1>Get in touch</h1>
          <ul className="ul-footer">
            <li><a>Contact Form</a></li>
            <li><a>adanperezhernandez@alumno.ieselrincon.es</a></li>
            <li><a>adanph15ph@gmail.com</a></li>
          </ul>
        </div>
        <div>
          <h1>Connect</h1>
          <ul className="ul-footer">
            <li><FaGithubSquare className="icon"/><a href="https://github.com/adanelrincon">GitHub</a></li>
            <li><FaTwitterSquare className="icon"/><a href="https://twitter.com/adn_1_5">Twitter</a></li>
          </ul>
        </div>
        <div>
          <h1>News & Info</h1>
          <ul className="ul-footer">
            <li><a href="https://www.nasa.gov">Nasa</a></li>
            <li><a href="https://www.spacex.com">SpaceX</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-container-logo">
        <div><p>© 2023 WasteOrbit | By Adán Pérez Hernández</p></div>
        <div><img className="mini-logo" src={`/logo.png`}/></div>
      </div>
    </footer>
  );
}