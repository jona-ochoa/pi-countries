import "./Navbar.css";
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className="nav-container">
      <div className="nav-wrapper">
        <div >
          <NavLink to="/" className="logo-nav">
            Henry <span className="span">Countries</span>
          </NavLink>
        </div>
        <button className="btn">Home</button>
      </div>
    </header>
  );
};

export default Navbar;
