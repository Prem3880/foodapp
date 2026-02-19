import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = ({ cart }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <nav className="navbar">
      {/* Left: Logo */}
      <div className="nav-left">
        <h2>Food App</h2>
      </div>

      {/* Hamburger icon for mobile */}
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <div className={`bar ${menuOpen ? "change1" : ""}`}></div>
        <div className={`bar ${menuOpen ? "change2" : ""}`}></div>
        <div className={`bar ${menuOpen ? "change3" : ""}`}></div>
      </div>

      {/* Links */}
      <div className={`nav-links ${menuOpen ? "active" : ""}`}>
        <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
        <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
        <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
      </div>

      {/* Cart */}
      <div className="nav-right">
        <Link to="/cart">Cart ({totalItems})</Link>
      </div>
    </nav>
  );
};

export default Navbar;
