import "../styles/navbar.css";

const Navbar = () => {
    return (
        <header className="site-navbar">
            <div className="container navbar-inner">
                <a className="brand" href="#beranda">
                    Padukuhan Ngasem
                </a>
                <nav className="nav-links">
                    <a href="#beranda">Beranda</a>
                    <a href="#profil">Profil</a>
                    <a href="#potensi">Potensi</a>
                    <a href="#umkm">UMKM</a>
                    <a href="#berita">Berita</a>
                    <a href="#kontak">Kontak</a>
                </nav>
                <a className="nav-cta" href="#kontak">
                    Hubungi
                </a>
            </div>
        </header>
    );
};

export default Navbar;