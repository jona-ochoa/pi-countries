import { useNavigate } from "react-router-dom";
import "./Landing.css";
const Landing = () => {
  const navigate = useNavigate();
  const goToHome = () => {
    navigate("/home");
  };
  return (
    <div className="landing-container">
      <div className="wrapper">
      <div>
        <h1 className="title">My Project Henry Countries</h1>
      </div>
      <div className="subtitle">
        Developed by <span>Jonatan Ochoa</span> with 💪
      </div>
      <div>
        <button onClick={goToHome}>Let`s Travel</button>
      </div>
      </div>
    </div>
  );
};

export default Landing;
