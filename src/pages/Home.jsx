import { useEffect, useState } from "react";
import "../styles/home.css";
import profileImg from "../assets/profile-placeholder.jpg";
import desaImg from "../assets/home-placeholder.jpeg";
import { Users, House, Map, Ruler, Music, Sprout, Beef, MessageCircle } from "lucide-react";

const Home = () => {
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.15 }
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

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

  useEffect(() => {
    const fetchUMKM = async () => {
      try {
        const res = await fetch("/api/umkm");
        const data = await res.json();

        if (res.ok) {
          setUmkmList(data.slice(0, 3));
        }
      } catch (error) {
        console.error("Gagal ambil UMKM:", error);
      }
    };

    fetchUMKM();
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

  const [umkmList, setUmkmList] = useState([]);

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
              <a href="#umkm" className="btn btn-primary btn-sm">
                Lihat UMKM
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="stats-wrap reveal">
        <div className="container stats-grid">
          <div className="stat-card">
            <House className="icon" />
            <span>Kepala Keluarga</span>
            <strong>167 KK</strong>
          </div>
          <div className="stat-card">
            <Users className="icon" />
            <span>Total Penduduk</span>
            <strong>±560 Jiwa</strong>
          </div>
          <div className="stat-card">
            <Map className="icon" />
            <span>Wilayah Administratif</span>
            <strong>4 RT | 1 RW</strong>
          </div>
          <div className="stat-card">
            <Ruler className="icon" />
            <span>Luas Wilayah</span>
            <strong>±20 km²</strong>
          </div>
        </div>
      </section>
      <section className="about reveal" id="profil">
        <div className="container about-box">
          <div className="about-text">
            <p className="section-label">Sambutan</p>
            <div className="quote-mark">“</div>
            <p className="about-speech">
              {sambutan.text || "Memuat sambutan..."}
            </p>
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
      <section className="potential reveal" id="potensi">
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
                  <Sprout size={28} />
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
                  <Beef size={28} />
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
                  <Music size={28} />
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
      <section className="products reveal" id="umkm">
        <div className="container">
          <div className="section-header center">
            <h2>UMKM Lokal</h2>
          </div>
          <div className="product-grid">
            {umkmList.length === 0 ? (
              <p>Memuat UMKM...</p>
            ) : (
              umkmList.map((item, index) => (
                <article className="product-card" key={index}>
                  <div
                    className="product-image"
                    style={{
                      backgroundImage: `url(${item.foto || "/placeholder.jpg"})`,
                    }}
                  />
                  <div className="product-body">
                    <h3>{item.nama}</h3>
                    <p>{item.alamat}</p>
                    <div className="product-footer">
                      <span>{item.notelp}</span>
                      <button
                        onClick={() =>
                          window.open(`https://wa.me/${item.notelp}`, "_blank")
                        }
                      >
                        <i className="bi bi-whatsapp"></i>
                        WhatsApp
                      </button>
                    </div>
                  </div>
                </article>
              ))
            )}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;