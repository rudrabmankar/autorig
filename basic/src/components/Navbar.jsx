import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">

      <div className="logo-container">
       <a href="/"><img
          src="/image3.jpeg"
          alt="AutoRig"
          className="logo"
        /></a>
      </div>

      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <a href="/#search">Search</a>
        </li>

        <li>
          <a href="/#products">Products</a>
        </li>

        <li>
          <Link to="/about">About Us</Link>
        </li>

        <li>
          <Link to="/support">Support</Link>
        </li>
      </ul>

    </nav>
  );
}

export default Navbar;