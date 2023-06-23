import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  function handleNavigate() {
    navigate("/form");
  }

  return (
    <header className="nav-container">
      <div className="nav-wrapper">
        <div>
          <NavLink to="/" className="logo-nav">
            Countries <span className="span">Project</span>
          </NavLink>
        </div>
        <button className="btn" onClick={handleNavigate}>
          ADD ACTIVITY
        </button>
      </div>
    </header>
  );
};

export default Navbar;
