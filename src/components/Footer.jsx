import "../styles/footer.css";

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
        </div>
        <div>
          <h4>Tautan</h4>
          <div className="footer-links-grid">
            <ul>
              <li><a href="#beranda">Beranda</a></li>
              <li><a href="#profil">Profil</a></li>
              <li><a href="#umkm">UMKM</a></li>
            </ul>
            <ul>
              <li><a href="#beranda">Beranda</a></li>
              <li><a href="#profil">Profil</a></li>
              <li><a href="#umkm">UMKM</a></li>
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
        © 2026 Padukuhan Ngasem. Seluruh Hak Cipta Dilindungi.<br />
        Website ini dikembangkan sebagai program kerja KKN 89 Universitas Atma Jaya Yogyakarta.
      </div>
    </footer>
  );
};

export default Footer;