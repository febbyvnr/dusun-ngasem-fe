import React, { useEffect } from "react";
import "../styles/potensi.css";
import { Music, Sprout, Beef, Bean, Vegan } from "lucide-react";

const Potensi = () => {
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
    return (
        <div className="potensi">
            <section className="section-hero reveal">
                <div className="section-hero-overlay">
                    <span className="section-badge">PROFIL DESA</span>
                    <h1>Potensi Padukuhan Ngasem</h1>
                    <p>
                        Menelusuri kekayaan alam, budaya, dan kearifan lokal yang
                        menjadi jantung kehidupan masyarakat kami.
                    </p>
                </div>
            </section>
            <section className="potensi-baru reveal">
                <div className="container reveal">
                    <div className="potensi-header"></div>
                    <div className="potensi-grid">
                        <article className="potensi-card">
                            <div className="potensi-icon">
                                <Sprout size={28} />
                            </div>
                            <h3>4 Komoditi</h3>
                            <p>
                                Tanah subur yang menghasilkan padi, sayuran, dan hasil kebun
                                untuk kebutuhan lokal.
                            </p>
                        </article>
                        <article className="potensi-card">
                            <div className="potensi-icon">
                                <Beef size={28} />
                            </div>
                            <h3>2 Jenis Ternak</h3>
                            <p>
                                Sentra peternakan sapi dan kambing yang menjadi kegiatan ekonomi
                                warga.
                            </p>
                        </article>
                        <article className="potensi-card">
                            <div className="potensi-icon">
                                <Music size={28} />
                            </div>
                            <h3>1 Sanggar Tari</h3>
                            <p>
                                Melestarikan budaya tradisional melalui kegiatan dan pertunjukan tari.
                            </p>
                        </article>
                    </div>
                </div>
            </section>
            <section className="potensi-section reveal">
                <div className="potensi-container">
                    <div className="text">
                        <span className="badge">PERTANIAN</span>
                        <h2>Lahan Sawah Produktif</h2>
                        <p>
                            Dengan sistem irigasi yang terjaga, lahan persawahan di
                            Padukuhan Ngasem menjadi penopang utama ekonomi warga,
                            menghasilkan gabah berkualitas tinggi secara berkelanjutan.
                        </p>
                        <div className="potensi-chips">
                            <span className="potensi-chip"><Sprout size={14} />Sawah</span>
                            <span className="potensi-chip"><Bean size={14} />Kacang</span>
                            <span className="potensi-chip"><Bean size={14} />Kedelai</span>
                        </div>
                    </div>
                    <div className="image">
                        <img src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6" />
                    </div>
                </div>
            </section>
            <section className="peternakan-section reveal">
                <div className="potensi-container">
                    <div className="image">
                        <img src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6" />
                    </div>
                    <div className="text">
                        <span className="badge">PETERNAKAN</span>
                        <h2>Peternakan Rakyat</h2>
                        <p>
                            Masyarakat Ngasem secara turun-temurun mengelola peternakan mandiri. 
                            Sapi dan kambing dipelihara dengan pakan alami 
                            untuk menjamin kualitas ternak yang unggul.
                        </p>
                        <div className="potensi-chips">
                            <span className="potensi-chip"><Beef size={14} />Sapi</span>
                            <span className="potensi-chip"><Beef size={14} />Kambing</span>
                        </div>
                    </div>
                </div>
            </section>
            <section className="horti reveal">
                <span className="badge center">HORTIKULTURA</span>
                <h2 className="badge-h2">Tanaman Produktif</h2>
                <p className="badge-subtitle">
                    Kekayaan buah-buahan lokal yang tumbuh subur di setiap
                    pekarangan warga.
                </p>
                <div className="horti-grid">
                    <div className="horti-card">
                        <div className="horti-icon"><Vegan size={24} /></div>
                        <p>Rambutan</p>
                    </div>
                    <div className="horti-card">
                        <div className="horti-icon"><Vegan size={24} /></div>
                        <p>Mangga</p>
                    </div>
                    <div className="horti-card">
                        <div className="horti-icon"><Vegan size={24} /></div>
                        <p>Alpukat</p>
                    </div>
                    <div className="horti-card">
                        <div className="horti-icon"><Vegan size={24} /></div>
                        <p>Durian</p>
                    </div>
                </div>
            </section>
            <section className="kesenian reveal">
                <div className="kesenian-container">
                    <div className="kesenian-text">
                        <span className="badge">KESENIAN</span>
                        <h2>Sanggar Tari Ngasem</h2>
                        <p>
                            Wadah bagi generasi muda untuk melestarikan tari
                            tradisional Jawa. Sanggar ini bukan sekadar tempat
                            berlatih, namun pusat denyut budaya di padukuhan kami.
                        </p>
                        <a 
                            href="https://wa.me/621234567890?text=Halo%20saya%20ingin%20bertanya%20tentang%20Sanggar%20Tari%20Ngasem" 
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            <button>Hubungi Sanggar Tari</button>
                        </a>
                    </div>
                    <div className="kesenian-img">
                        <img src="https://images.unsplash.com/photo-1544644181-1484b3fdfc62?q=80&w=1000&auto=format&fit=crop" />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Potensi;