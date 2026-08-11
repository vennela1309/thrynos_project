import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./components/Home.jsx";
import Shop from "./components/Shop.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Shop" element={<Shop/>}/>
      </Routes>
    </Router>
  );
}

export default App;
