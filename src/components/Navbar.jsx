import { Link } from "react-router-dom";
import "../App.css";
import { IoSearch } from "react-icons/io5";
import { LuUser, LuShoppingCart } from "react-icons/lu";

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="navheading">THRYNOS</h2>
       <div className="nav-empty"></div>

      <div className="navPages">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/shop" className="nav-link">Shop</Link>
        <Link to="/about" className="nav-link">About</Link>
        <Link to="/contact" className="nav-link">Contact</Link>
      </div>

      <div className="navicons">
        <button><IoSearch /></button>
        <button><LuUser /></button>
        <button><LuShoppingCart /></button>
      </div>
    </nav>
  );
}

export default Navbar;
