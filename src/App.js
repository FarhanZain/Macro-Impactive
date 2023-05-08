import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import LandingPage from "./views/landingPage";
import AksiTanggap from "./views/aksiTanggap";
import DasboardPage from "./views/dashboardPage";
import NotFound from "./views/notFound";
import AksiTanggapDetail from "./views/aksiTanggapDetail";
import LandingPageLogin from "./views/landingPageLogin";
import AksiTanggapLogin from "./views/aksiTanggapLogin";
import AksiTanggapDetailLogin from "./views/aksiTanggapDetailLogin";
import DasboardSeleksiRelawan from "./views/dashboardSeleksiRelawan";
import Contoh from "./views/contoh";
import AksiTanggapDetailTerdaftar from "./views/aksiTanggapDetailTerdaftar";
import RegisterRelawan from "./views/registerRelawan";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route
          path="/Landing-Page-Login"
          element={<LandingPageLogin />}
        ></Route>
        <Route path="/AksiTanggap" element={<AksiTanggap />}></Route>
        <Route
          path="/Aksi-Tanggap-Login"
          element={<AksiTanggapLogin />}
        ></Route>
        <Route
          path="/Aksi-Tanggap-Detail"
          element={<AksiTanggapDetail />}
        ></Route>
        <Route
          path="/Aksi-Tanggap-Detail-Login"
          element={<AksiTanggapDetailLogin />}
        ></Route>
        <Route
          path="/Aksi-Tanggap-Detail-Terdaftar"
          element={<AksiTanggapDetailTerdaftar />}
        ></Route>
        <Route path="/Dashboard" element={<DasboardPage />}></Route>
        <Route
          path="/Dashboard-Seleksi-Relawan"
          element={<DasboardSeleksiRelawan />}
        ></Route>
        <Route path="/contoh" element={<Contoh />}></Route>
        <Route path="/Registrasi-Relawan" element={<RegisterRelawan />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
