import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import LandingPage from "./views/landingPage";
import AksiTanggap from "./views/aksiTanggap";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/AksiTanggap" element={<AksiTanggap />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
