import { useEffect, useState } from "react";
import "../styles/umkm.css";

const UMKM = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("/api/umkm")
            .then((res) => res.json())
            .then((res) => setData(res))
            .catch((err) => console.error(err));
    }, []);

    const formatWA = (num) => {
        if (!num) return "";
        const str = String(num);
        if (str.startsWith("0")) {
            return "62" + str.slice(1);
        }
        return str;
    };

    return (
        <div className="umkm">
            <section className="section-hero">
                <div className="section-hero-overlay">
                    <span className="umkm-badge">UMKM</span>
                    <h1>UMKM Padukuhan Ngasem</h1>
                    <p>
                        Menggerakkan ekonomi lokal melalui produk kreatif,
                        inovatif, dan berkualitas dari masyarakat.
                    </p>
                </div>
            </section>
            <section className="umkm-list-section">
                <div className="umkm-header">
                    <h2>Potensi Lokal Ngasem</h2>
                    <p>Temukan berbagai produk dan layanan berkualitas yang dikelola langsung oleh warga Padukuhan Ngasem.</p>
                </div>
                <div className="umkm-grid">
                    {data.map((item) => (
                        <div className="umkm-card" key={item.id}>
                            <img src={item.foto} />
                            <div className="card-content">
                                <div className="card-top">
                                    <h4>{item.nama}</h4>
                                </div>
                                <p className="desc">{item.deskripsi}</p>
                                <a href={`https://wa.me/${formatWA(item.notelp)}`} target="_blank" rel="noreferrer" >
                                    <button><i className="bi bi-chat-left-text"></i>Hubungi via WhatsApp</button>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default UMKM;