import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Profil from "./pages/Profil";
import Potensi from "./pages/Potensi";
import UMKM from "./pages/UMKM";
import Kontak from "./pages/Kontak";

import Login from "./pages/Login";
import Admin from "./pages/Admin";

import ScrollToTop from "./ScrollToTop";
import UMKMAdmin from "./pages/UMKMAdmin";

function Layout() {
    const location = useLocation();

    const hideLayout = location.pathname === "/admin" || location.pathname === "/umkmadmin" ;

    return (
        <>
            {!hideLayout && <Navbar />}
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/profil" element={<Profil />} />
                <Route path="/potensi" element={<Potensi />} />
                <Route path="/umkm" element={<UMKM />} />
                <Route path="/kontak" element={<Kontak />} />

                <Route path="/login" element={<Login />} />
                <Route path="/admin" element={<Admin />} />
                <Route path="/umkmadmin" element={<UMKMAdmin />} />
            </Routes>
            {!hideLayout && <Footer />}
        </>
    );
}

function App() {
    return (
        <BrowserRouter>
            <Layout />
        </BrowserRouter>
    );
}

export default App;