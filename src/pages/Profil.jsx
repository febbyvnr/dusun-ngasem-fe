import React, { useEffect } from "react";
import "../styles/profil.css";
import petawilayah from "../assets/peta-wilayah.jpg";

export default function Profil() {
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
        <div className="profil">
            <section className="section-hero reveal">
                <div className="section-hero-overlay">
                    <span className="section-badge">PROFIL DESA</span>
                    <h1>Profil Padukuhan Ngasem</h1>
                    <p>
                        Menjaga tradisi, membangun masa depan yang berkelanjutan di jantung
                        alam pedesaan yang asri.
                    </p>
                </div>
            </section>
            <section className="sejarah reveal">
                    <div className="sejarah-container">
                        <div className="sejarah-img reveal">
                            <img
                                src="https://images.unsplash.com/photo-1500382017468-9049fed747ef"
                                alt="sawah"
                            />
                        </div>
                        <div className="sejarah-text reveal">
                            <h2>Sejarah</h2>
                            <p>
                                Padukuhan Ngasem memiliki akar sejarah yang kuat sejak masa Kesultanan.
                                Nama "Ngasem" konon berasal dari banyaknya pohon Asem yang tumbuh
                                subur di wilayah ini pada masa lampau, memberikan keteduhan bagi para
                                musafir yang melintas.
                            </p>
                            <p>
                                Terletak di wilayah dataran tinggi yang dikelilingi oleh area persawahan
                                produktif, Ngasem memiliki luas wilayah sekitar 20 kilometer. Keunggulan
                                geografis ini menjadikan Ngasem sebagai salah satu lumbung pangan lokal
                                yang vital bagi wilayah sekitarnya.
                            </p>
                            <div className="profil-stats">
                                <div>
                                    <h3>± 20 km²</h3>
                                    <span>Luas Wilayah</span>
                                </div>
                                <div>
                                    <h3>± 560</h3>
                                    <span>Jumlah Penduduk</span>
                                </div>
                            </div>
                        </div>
                    </div>
            </section>
            <section className="visi reveal">
                <h2>Visi & Misi</h2>
                <p className="subtitle">
                    Arah pembangunan menuju masyarakat mandiri dan religius
                </p>
                <div className="visi-grid">
                    <div className="visi-card main reveal">
                        <i className="bi bi-eye"></i>
                        <h3>Visi Kami</h3>
                        <p>
                            "Mewujudkan Padukuhan Ngasem sebagai desa mandiri yang unggul dalam
                            pertanian dan pariwisata berbasis kearifan lokal."
                        </p>
                    </div>
                    <div className="visi-card reveal">
                        <div className="card-header">
                            <div className="icon-box">
                                <i className="bi bi-graph-up"></i>
                            </div>
                            <h3>Modernisasi Pertanian</h3>
                        </div>
                        <p className="mini-p">
                            Meningkatkan produktivitas pertanian melalui teknologi tepat guna yang ramah lingkungan.
                        </p>
                    </div>
                    <div className="visi-card reveal">
                        <div className="card-header">
                            <div className="icon-box">
                                <i className="bi bi-people"></i>
                            </div>
                            <h3>Pemberdayaan Masyarakat</h3>
                        </div>
                        <p className="mini-p">
                            Menguatkan kapasitas UMKM dan
                            keterampilan pemuda melalui pelatihan
                            berkelanjutan.
                        </p>
                    </div>
                    <div className="visi-card reveal">
                        <div className="card-header">
                            <div className="icon-box">
                                <i className="bi bi-tree"></i>
                            </div>
                            <h3>Kelestarian Alam</h3>
                        </div>
                        <p className="mini-p">
                            Menjaga ekosistem hijau desa sebagai warisan untuk generasi mendatang.
                        </p>
                    </div>
                    <div className="visi-card reveal">
                        <div className="card-header">
                            <div className="icon-box">
                                <i className="bi bi-gear"></i>
                            </div>
                            <h3>Tata Kelola Transparan</h3>
                        </div>
                        <p className="mini-p">
                            Menyelenggarakan administrasi desa yang jujur, terbuka, dan akuntabel.
                        </p>
                    </div>
                </div>
            </section>
            <section className="geografis reveal">
                <div className="geo-container">
                    <div className="geo-img reveal">
                        <img
                            src={petawilayah}
                            alt="desa"
                        />
                    </div>
                    <div className="geo-batas reveal">
                        <h3><i className="bi bi-geo"></i>Batas Wilayah</h3>
                        <ul>
                            <li>Utara: Padukuhan lain</li>
                            <li>Selatan: Perbukitan</li>
                            <li>Timur: Lahan pertanian</li>
                            <li>Barat: Permukiman warga</li>
                        </ul>
                    </div>
                </div>
            </section>
            <section className="kunjungi reveal">
                <div className="kunjungi-container">
                    <div className="kunjungi-info reveal">
                        <h2>Kunjungi Kami</h2>
                        <div className="info-item">
                            <i className="bi bi-geo-alt"></i>
                            <div className="info-text">
                                <span>ALAMAT</span>
                                <p>Padukuhan Ngasem, Ngalang, Gunungkidul, D.I.Y</p>
                            </div>
                        </div>
                        <div className="info-item">
                            <i className="bi bi-telephone"></i>
                            <div className="info-text">
                                <span>TELEPON</span>
                                <p>+62 812-3456-7890</p>
                            </div>
                        </div>
                    </div>
                    <div className="kunjungi-img reveal">
                        <img
                            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
                            alt="desa"
                        />
                    </div>
                </div>
            </section>
        </div>
    );
}