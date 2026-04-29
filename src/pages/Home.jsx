import { useEffect, useState } from "react";
import "../styles/home.css";
import profileImg from "../assets/profile-placeholder.jpg";
import desaImg from "../assets/home-placeholder.jpg";

const Home = () => {
  const [sambutan, setSambutan] = useState({
    text: "",
    nama: "",
    jabatan: "",
  });

  useEffect(() => {
    const fetchSambutan = async () => {
      try {
        const res = await fetch("/api/sambutan");
        const data = await res.json();

        if (res.ok) {
          setSambutan(data);
        }
      } catch (error) {
        console.error("Gagal ambil sambutan:", error);
      }
    };

    fetchSambutan();
  }, []);

  const beritaList = [
    {
      tanggal: "09 Jan 2026",
      jenis: "Kegiatan",
      judul: "Gotong Royong Bersih Dusun Jelang Musim Hujan",
      deskripsi: "Warga kompak membersihkan saluran air dan lingkungan untuk menjaga kebersihan dusun.",
    },
    {
      tanggal: "14 Jan 2026",
      jenis: "Kesehatan",
      judul: "Posyandu Lansia & Pemeriksaan Kesehatan Gratis",
      deskripsi: "Program rutin pemeriksaan kesehatan untuk warga lanjut usia di Padukuhan Ngasem.",
    },
  ];

  const truncateText = (text, length = 30) =>
    text.length > length ? text.slice(0, length) + "..." : text;

  return (
    <main className="home-page">
      <section className="hero" id="beranda">
        <div
          className="hero-overlay"
          style={{ backgroundImage: `url(${desaImg})` }}
        >
          <div className="container hero-content">
            <span className="hero-badge">Padukuhan Ngasem, Kalurahan Ngalang</span>
            <h1>Selamat Datang di Padukuhan Ngasem</h1>
            <p>
              Harmoni alam dan kehidupan masyarakat di jantung Gunungkidul.
              Temukan kisah desa, potensi lokal, dan produk unggulan kami.
            </p>
            <div className="hero-actions">
              <a href="#profil" className="btn btn-primary btn-sm">
                Jelajahi Dusun
              </a>
              <a href="#umkm" className="btn btn-outline btn-sm">
                Lihat UMKM
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="stats-wrap">
        <div className="container stats-grid">
          <div className="stat-card">
            <span>Populasi</span>
            <strong>167 KK</strong>
          </div>
          <div className="stat-card">
            <span>Warga</span>
            <strong>+-560 Jiwa</strong>
          </div>
          <div className="stat-card">
            <span>Wilayah</span>
            <strong>4 RT / 1 RW</strong>
          </div>
          <div className="stat-card">
            <span>Luas Area</span>
            <strong>±20 km²</strong>
          </div>
        </div>
      </section>
      <section className="about" id="profil">
        <div className="container about-box">
          <div className="about-text">
            <p className="section-label">Sambutan</p>
            <h4 className="about-speech">
              {sambutan.text || "Memuat sambutan..."}
            </h4>
            <div className="about-sign">
              <div className="sign-line" />
              <div className="sign-info">
                <span>{sambutan.nama || "Memuat nama..."}</span>
                <small>{sambutan.jabatan || "Memuat jabatan..."}</small>
              </div>
            </div>
          </div>
          <div className="about-image">
            <img src={profileImg} alt="Profil Dukuh Ngasem" />
          </div>
        </div>
      </section>
      <section className="potential" id="potensi">
        <div className="container">
          <div className="section-header">
            <div>
              <p className="section-label dark">KEKAYAAN LOKAL</p>
              <h2>Potensi Dusun</h2>
            </div>
            <a href="#semua-potensi">Lihat Semua Potensi →</a>
          </div>
          <div className="card-grid">
            <article className="info-card">
              <div className="info-icon-wrap">
                <div className="info-icon-circle">
                  <i className="bi bi-flower1"></i>
                </div>
              </div>
              <h3>Pertanian</h3>
              <p>
                Tanah subur yang menghasilkan padi, sayuran, dan hasil kebun
                untuk kebutuhan lokal.
              </p>
            </article>
            <article className="info-card">
              <div className="info-icon-wrap">
                <div className="info-icon-circle">
                  <i className="bi bi-egg-fried"></i>
                </div>
              </div>
              <h3>Peternakan</h3>
              <p>
                Sentra peternakan sapi dan kambing yang menjadi kegiatan ekonomi
                warga.
              </p>
            </article>
            <article className="info-card">
              <div className="info-icon-wrap">
                <div className="info-icon-circle">
                  <i className="bi bi-music-note-beamed"></i>
                </div>
              </div>
              <h3>Kesenian</h3>
              <p>
                Melestarikan budaya tradisional melalui kegiatan seni dan
                pertunjukan lokal.
              </p>
            </article>
          </div>
        </div>
      </section>
      <section className="products" id="umkm">
        <div className="container">
          <div className="section-header center">
            <h2>UMKM Lokal</h2>
          </div>
          <div className="product-grid">
            <article className="product-card">
              <div className="product-image image-1" />
              <div className="product-body">
                <h3>Kerajinan Bambu</h3>
                <p>Anyaman tangan asli dari bambu, pilihan untuk kebutuhan rumah.</p>
                <div className="product-footer">
                  <span>Rp 45.000 - 150k</span>
                  <button><i className="bi bi-whatsapp"></i>WhatsApp</button>
                </div>
              </div>
            </article>
            <article className="product-card">
              <div className="product-image image-2" />
              <div className="product-body">
                <h3>Gula Semut Organik</h3>
                <p>Gula kelapa murni tanpa bahan pengawet, cocok untuk minuman.</p>
                <div className="product-footer">
                  <span>Rp 25.000 / pack</span>
                  <button><i className="bi bi-whatsapp"></i>WhatsApp</button>
                </div>
              </div>
            </article>
            <article className="product-card">
              <div className="product-image image-3" />
              <div className="product-body">
                <h3>Jamu Bubuk Instan</h3>
                <p>Minuman herbal praktis dari rempah pilihan untuk kesehatan.</p>
                <div className="product-footer">
                  <span>Rp 15.000 / pack</span>
                  <button><i className="bi bi-whatsapp"></i>WhatsApp</button>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
      <section className="activities" id="berita">
        <div className="container">
          <div className="section-header center">
            <h2>Kegiatan Terbaru</h2>
          </div>
          <div className="activity-list">
            {beritaList.map((item, index) => (
              <article className="activity-card row" key={index}>
                <div className="activity-thumb">
                  <span className="activity-badge">{item.tanggal}</span>
                  <div className={`activity-image a${index + 1}`} />
                </div>
                <div className="activity-body">
                  <p className="activity-type">{item.jenis}</p>
                  <h3>{item.judul}</h3>
                  <p>{truncateText(item.deskripsi, 60)}</p>
                  <a href="#berita" className="read-more">
                    Baca selengkapnya <i className="bi bi-arrow-right" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;