import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import LandingPage from "./views/landingPage";
import AksiTanggap from "./views/aksiTanggap";
import DasboardPage from "./views/dashboardPage";
import NotFound from "./views/notFound";
import AksiTanggapDetail from "./views/aksiTanggapDetail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/AksiTanggap" element={<AksiTanggap />}></Route>
        <Route
          path="/Aksi-Tanggap-Detail"
          element={<AksiTanggapDetail />}
        ></Route>
        <Route path="/Dashboard" element={<DasboardPage />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
