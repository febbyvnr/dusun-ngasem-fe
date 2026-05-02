import { useState, useEffect, useRef } from "react";
import "../styles/navbar.css";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const navRef = useRef();
    const toggleRef = useRef();

   useEffect(() => {
        const handleResize = () => {
            const mobile = window.innerWidth <= 768;
            setIsMobile(mobile);
            if (!mobile) {
                setIsOpen(false);
            }
        };
        const handleClickOutside = (event) => {
            if (
                navRef.current &&
                !navRef.current.contains(event.target) &&
                toggleRef.current &&
                !toggleRef.current.contains(event.target)
            ) {
                setIsOpen(false);
            }
        };
        window.addEventListener("resize", handleResize);
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            window.removeEventListener("resize", handleResize);
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <header className="site-navbar">
            <div className="container navbar-inner">
                <a className="brand" href="#beranda">Padukuhan Ngasem</a>
                {isMobile && (
                    <button
                        ref={toggleRef}
                        className="menu-toggle"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <i className="bi bi-list"></i>
                    </button>
                )}
                <nav ref={navRef} className={`nav-links ${ isMobile ? (isOpen ? "active" : "") : "" }`} >
                    <NavLink to="/" end onClick={() => setIsOpen(false)}>Beranda</NavLink>
                    <NavLink to="/profil" onClick={() => setIsOpen(false)}>Profil</NavLink>
                    <NavLink to="/potensi" onClick={() => setIsOpen(false)}>Potensi</NavLink>
                    <NavLink to="/umkm" onClick={() => setIsOpen(false)}>UMKM</NavLink>
                    <NavLink to="/kontak" onClick={() => setIsOpen(false)}>Kontak</NavLink>
                </nav>
                {!isMobile && (
                    <Link className="nav-cta" to="/kontak">Hubungi</Link>
                )}
            </div>
        </header>
    );
};

export default Navbar;