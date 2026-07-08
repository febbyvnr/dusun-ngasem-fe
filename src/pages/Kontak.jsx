import React, { useEffect, useState } from "react";
import "../styles/kontak.css";

const Kontak = () => {
    const [dataRT, setDataRT] = useState([]);
    const [dukuh, setDukuh] = useState(null);
    const [ketuaRW, setKetuaRW] = useState(null);

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
        const fetchData = async () => {
            try {
                const res = await fetch("/api/pengurus");
                const data = await res.json();
                const dukuhData = data.find(
                    (item) => item.jabatan === "Pak Dukuh"
                );
                const rwData = data.find(
                    (item) => item.jabatan === "Ketua RW"
                );
                const rtData = data.filter((item) =>
                    item.jabatan.includes("Ketua RT")
                );
                setDukuh(dukuhData);
                setKetuaRW(rwData);
                setDataRT(rtData);
            } catch (err) {
                console.error(err);
            }
        };
        fetchData();
        return () => observer.disconnect();
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
        <div className="kontak">
            <section className="section-hero reveal">
                <div className="section-hero-overlay reveal">
                    <h1>Kontak</h1>
                    <p>
                        Kami hadir untuk melayani dan mendengar aspirasi warga
                        Padukuhan Ngasem.
                    </p>
                </div>
            </section>
            <section className="kontak-cards reveal">
                <div className="card reveal">
                    <div className="card-icon">
                        <i className="bi bi-geo-alt"></i>
                    </div>
                    <h3>Lokasi</h3>
                    <p>
                        Masjid Nur Hidayah Ngasem,<br />
                        Ngasem, Ngalang, Gedangsari, Gunungkidul
                    </p>
                </div>
                <div className="card reveal">
                    <img
                        src={dukuh?.foto}
                        alt={dukuh?.nama}
                        className="pengurus-avatar"
                    />
                    <h3>Dukuh Ngasem</h3>
                    {dukuh ? (
                        <>
                            <p>
                                {dukuh.nama}
                                <br />
                                {dukuh.notelp}
                            </p>
                            <a
                                href={`https://wa.me/${formatWA(dukuh.notelp)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="rt-wa"
                            >
                                <i className="bi bi-chat-left-text"></i>
                                WhatsApp Dukuh
                            </a>
                        </>
                    ) : (
                        <p>Loading...</p>
                    )}
                </div>
                <div className="card reveal">
                    <img
                        src={ketuaRW?.foto}
                        alt={ketuaRW?.nama}
                        className="pengurus-avatar"
                    />
                    <h3>Ketua RW</h3>
                    {ketuaRW ? (
                        <>
                            <p>
                                {ketuaRW.nama}
                                <br />
                                {ketuaRW.notelp}
                            </p>
                            <a
                                href={`https://wa.me/${formatWA(ketuaRW.notelp)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="rt-wa"
                            >
                                <i className="bi bi-chat-left-text"></i>
                                WhatsApp Ketua RW
                            </a>
                        </>
                    ) : (
                        <p>Loading...</p>
                    )}
                </div>
            </section>
            <section className="rt-section reveal">
                <span className="badge">STRUKTUR WARGA</span>
                <h2>Kontak Ketua RT</h2>
                <p className="subtitle">
                    Silakan hubungi ketua RT masing-masing untuk koordinasi kegiatan lokal dan administrasi lingkungan.
                </p>
                <div className="rt-grid">
                    {dataRT.map((item) => (
                        <div className="rt-card" key={item.id}>
                            <div className="rt-card-content">
                                <div className="rt-info">
                                    <h4>{item.jabatan.replace("Ketua ", "")}</h4>
                                    <p>Ketua RT</p>
                                    <p className="rt-card-p-value">
                                        {item.nama}
                                    </p>
                                    <a
                                        href={`https://wa.me/${formatWA(item.notelp)}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="rt-wa"
                                    >
                                        <i className="bi bi-chat-left-text"></i>
                                        WhatsApp
                                    </a>
                                </div>
                                <div className="rt-photo">
                                    <img
                                        src={item.foto}
                                        alt={item.nama}
                                        className="rt-avatar"
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            <section className="map-section reveal">
                <div className="kontak-container">
                    <iframe
                        src="https://www.google.com/maps?q=Ngasem,+Ngalang&output=embed"
                        width="100%"
                        height="100%"
                        style={{ border: 0, borderRadius: "12px" }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </section>
        </div>
    );
};

export default Kontak;