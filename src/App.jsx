import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Profil from "./pages/Profil";
import Potensi from "./pages/Potensi";
import UMKM from "./pages/UMKM";
import Kontak from "./pages/Kontak";
import ScrollToTop from "./ScrollToTop";

function App() {
    return (
        <BrowserRouter>
            <Navbar />
                <ScrollToTop />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/profil" element={<Profil />} />
                    <Route path="/potensi" element={<Potensi />} />
                    <Route path="/umkm" element={<UMKM />} />
                    <Route path="/kontak" element={<Kontak />} />
                </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default App;