import "./Header.css";
import jasonimg from "../../assets/img/jasonimg";

function Header() {
  return (
    <>
      <head>
        <script defer src="theme.js"></script>
      </head>
      <nav class="navbar">
        <ul class="navbar-nav">
          <li class="logo">
            <a href="#" class="nav-link">
              <span class="link-text logo-text">OrbitWaste</span>
            </a>
          </li>
          <li class="nav-item">
            <a href="/home" class="nav-link">
              <img id="logos-nav" src={jasonimg[7]} />
              <span class="link-text">Home</span>
            </a>
          </li>
          <li class="nav-item">
            <a href="/hazards" class="nav-link">
              <img id="logos-nav" src={jasonimg[6]} />
              <span class="link-text">Hazards</span>
            </a>
          </li>
          <li class="nav-item">
            <a href="/solutions" class="nav-link">
              <img id="logos-nav" src={jasonimg[5]} />
              <span class="link-text">Solutions</span>
            </a>
          </li>
          <li class="nav-item">
            <a href="/news" class="nav-link">
              <img id="logos-nav" src={jasonimg[8]} />
              <span class="link-text">News</span>
            </a>
          </li>
          <li class="nav-item">
            <a href="/news" class="nav-link">
              <img id="logos-nav" src={jasonimg[8]} />
              <span class="link-text">NuevaPagina</span>
            </a>
          </li>
          <li class="nav-item" id="themeButton">

          </li>
        </ul>
      </nav>
    </>
  );
};
export default Header;
