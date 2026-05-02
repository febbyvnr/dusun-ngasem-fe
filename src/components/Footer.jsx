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
              <li><a href="#potensi">Potensi</a></li>
            </ul>
            <ul>
              <li><a href="#umkm">UMKM</a></li>
              <li><a href="#kontak">Kontak</a></li>
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
        © Copyright by KKN 89 UAJY Kelompok 10 2026, All Right Reserved.
      </div>
    </footer>
  );
};

export default Footer;