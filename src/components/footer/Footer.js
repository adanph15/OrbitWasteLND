import "./Footer.css";
import { FaTwitterSquare, FaGithubSquare } from "react-icons/fa";
export default function Footer() {
  return (
    <footer>
      <div className="container">
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
          <h1>NEWNS & INFO</h1>
          <ul className="ul-footer">
            <li>GIT</li>
            <li>MAIL</li>
            <li>TWITTER</li>
          </ul>
        </div>
      </div>
      <div className="container-logo">
        <div><p>© 2023 WasteOrbit | By Adán Pérez Hernández</p></div>
        <div><img className="mini-logo" src={`/logo.png`}/></div>
      </div>
    </footer>
  );
}