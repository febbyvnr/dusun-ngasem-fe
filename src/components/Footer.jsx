import "../styles/footer.css";
import { NavLink } from "react-router-dom";
import {
  FaInstagram,
  FaYoutube,
  FaTiktok,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="site-footer" id="kontak">
      <div className="container footer-grid">
        <div>
          <h3>Padukuhan Ngasem</h3>
          <p>
            Pusat informasi resmi dan pelayanan digital untuk
            seluruh warga Padukuhan Ngasem, Kalurahan
            Ngalang.
          </p>
          <div className="footer-social">
            <a
              href="https://www.youtube.com/@padukuhanngasem"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
            >
              <FaYoutube />
            </a>
            <a
              href="https://www.instagram.com/padukuhanngasem?igsh=cXo4MGh3c2VmcGE4&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.tiktok.com/@padukuhan.ngasem?_r=1&_t=ZS-97zTaOyH7PV"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
            >
              <FaTiktok />
            </a>
          </div>
        </div>
        <div>
          <h4>Tautan</h4>
          <div className="footer-links-grid">
            <ul>
              <li><NavLink to="/">Beranda</NavLink></li>
              <li><NavLink to="/profil">Profil</NavLink></li>
              <li><NavLink to="/potensi">Potensi</NavLink></li>
            </ul>
            <ul>
              <li><NavLink to="/umkm">UMKM</NavLink></li>
              <li><NavLink to="/kontak">Kontak</NavLink></li>
              <li><NavLink to="/login">Login</NavLink></li>
            </ul>
          </div>
        </div>
        <div className="lokasi">
          <h4>Lokasi</h4>
          <p>Ngasem, Ngalang, Gedangsari, Kabupaten Gunung Kidul,
              Daerah Istimewa Yogyakarta 55863</p>
        </div>
      </div>
      <div className="container footer-divider" />
      <div className="container footer-copyright">
        © Copyright by KKN 89 Kelompok 10 UAJY 2026, All Right Reserved.
      </div>
    </footer>
  );
};

export default Footer;