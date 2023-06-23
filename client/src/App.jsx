// import Logo from "../../countries.png";
import "./App.css";

import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import { useLocation } from "react-router-dom";

import Home from "./pages/Home/Home";
import Detail from "./pages/Detail/Detail";
import Landing from "./pages/Landing/Landing";
import Form from "./pages/Form/Form";

function App() {
  const location = useLocation();

  return (
    <>
      {location.pathname !== "/" && <Navbar />}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route exact path="/home" element={<Home />} />
        <Route path="/home/:id" element={<Detail />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </>
  );
}

export default App;
