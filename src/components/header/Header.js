import "./Header.css";
export default function Header() {
  return (
    <header>
      <div className="menu">
        <div className="logo"><img src={`/logo.png`}/></div>
        <div className="ul-div">
          <ul className="ul-header">
            <li><a><h2>Home</h2></a></li>
            <li><a><h2>Solutions</h2></a></li>
            <li><a><h2>Hazard</h2></a></li>
          </ul>
        </div>
      </div>
    </header>
  );
}