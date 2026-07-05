import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/admin.css";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function Admin() {
    const [dukuh, setDukuh] = useState({
        id: null,
        nama: "",
        notelp: "",
        jabatan: "Pak Dukuh",
    });
    const [ketuaRW, setKetuaRW] = useState({
        id: null,
        nama: "",
        notelp: "",
        jabatan: "Ketua RW",
    });
    const rwData = data.find(
        (item) => item.jabatan === "Ketua RW"
    );
    const [rtList, setRtList] = useState([]);
    const [sambutan, setSambutan] = useState({
        text: "",
    });
    useEffect(() => {
        fetchPengurus();
        fetchSambutan();
    }, []);
    async function fetchPengurus() {
        try {
            const response = await fetch("/api/pengurus");
            const data = await response.json();
            const dukuhData = data.find(
                (item) => item.jabatan === "Pak Dukuh"
            );
            const rtData = data.filter((item) =>
                item.jabatan?.includes("Ketua RT")
            );
            if (dukuhData) {
                setDukuh(dukuhData);
            }
            setRtList(rtData);
        } catch (error) {
            console.log(error);
        }
    }
    async function fetchSambutan() {
        try {
            const response = await fetch("/api/sambutan");
            const data = await response.json();
            setSambutan({
                text: data.text || "",
            });
        } catch (error) {
            console.log(error);
        }
    }
    async function saveDukuh() {
        try {
            await fetch("/api/update-pengurus", {
                method: "POST",
                headers: {
                "Content-Type": "application/json",
                },
                body: JSON.stringify(dukuh),
            });
            alert("Profil Pak Dukuh berhasil diperbarui");
        } catch (error) {
            console.log(error);
        }
    }
    async function saveRW() {
        try {
            await fetch("/api/update-pengurus", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(ketuaRW),
            });
            alert("Ketua RW berhasil diperbarui");
        } catch (error) {
            console.log(error);
        }
    }
    async function saveRT(rt) {
        try {
            await fetch("/api/update-pengurus", {
                method: "POST",
                headers: {
                "Content-Type": "application/json",
                },
                body: JSON.stringify(rt),
            });
            alert(`${rt.jabatan} berhasil diperbarui`);
        } catch (error) {
            console.log(error);
        }
    }
    async function saveSambutan() {
        try {
            await fetch("/api/sambutan", {
                method: "POST",
                headers: {
                "Content-Type": "application/json",
                },
                body: JSON.stringify(sambutan),
            });
            alert("Sambutan berhasil diperbarui");
        } catch (error) {
            console.log(error);
        }
    }
    return (
            <div className="admin-page">
                <section className="admin-hero">
                    <div className="admin-hero-overlay">
                        <h1>Manajemen Pengurus</h1>
                        <p>
                            Kelola data administratif pejabat
                            Padukuhan Ngasem untuk memastikan
                            koordinasi layanan masyarakat tetap
                            lancar.
                        </p>
                    </div>
                </section>
                <div className="admin-layout">
                    <div className="admin-left">
                        <div className="profile-card">
                            <div className="profile-banner">
                            </div>
                            <h2>Profil Pak Dukuh</h2>
                            <div className="form-group">
                                <label>Nama Lengkap</label>
                                <input
                                    type="text"
                                    value={dukuh.nama || ""}
                                    onChange={(e) =>
                                        setDukuh({
                                            ...dukuh,
                                            nama: e.target.value,
                                        })
                                    }
                                />
                            </div>
                            <div className="form-group">
                                <label>Nomor Telepon / WA</label>
                                <input
                                    type="text"
                                    value={dukuh.notelp || ""}
                                    onChange={(e) =>
                                        setDukuh({
                                            ...dukuh,
                                            notelp: e.target.value,
                                        })
                                    }
                                />
                            </div>
                            <button
                                className="save-btn primary-btn"
                                onClick={saveDukuh}
                            >
                            <i className="bi bi-floppy"></i>
                                Simpan Perubahan
                            </button>
                        </div>
                        <div className="sambutan-card">
                            <div className="section-title">
                                <h3>Sambutan</h3>
                            </div>
                            <div className="form-group">
                                <label>Teks Sambutan</label>
                                <textarea
                                    rows="16"
                                    placeholder="Masukkan teks sambutan..."
                                    value={sambutan.text || ""}
                                    onChange={(e) =>
                                        setSambutan({
                                            ...sambutan,
                                            text: e.target.value,
                                        })
                                    }
                                />
                            </div>
                            <button
                                className="save-btn primary-btn"
                                onClick={saveSambutan}
                            >
                            <i className="bi bi-file-earmark-text"></i>
                                Simpan Sambutan
                            </button>
                        </div>
                    </div>
                    <div className="admin-right">
                        <div className="rw-section">
                            <div className="rt-title-left">
                                <i className="bi bi-person-badge-fill"></i>
                                <h2>Manajemen Ketua RW</h2>
                            </div>
                            <div className="rw-card">
                                <div className="form-group">
                                    <label>Nama Lengkap</label>
                                    <input
                                        type="text"
                                        value={ketuaRW.nama || ""}
                                        onChange={(e) =>
                                            setKetuaRW({
                                                ...ketuaRW,
                                                nama: e.target.value,
                                            })
                                        }
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Nomor Telepon</label>
                                    <input
                                        type="text"
                                        value={ketuaRW.notelp || ""}
                                        onChange={(e) =>
                                            setKetuaRW({
                                                ...ketuaRW,
                                                notelp: e.target.value,
                                            })
                                        }
                                    />
                                </div>
                                <button className="save-btn" onClick={saveRW}>
                                    <i className="bi bi-check-circle"></i>
                                    Simpan Ketua RW
                                </button>
                            </div>
                        </div>
                        <div className="rt-header">
                            <div className="rt-title-left">
                                <i className="bi bi-people-fill"></i>
                                <h2>Manajemen Ketua RT</h2>
                            </div>
                            <div className="rt-header-right">
                                <NavLink to="/umkmadmin" className="btn-switch">UMKM</NavLink>
                                <NavLink to="/" className="btn-logout">
                                    <i className="bi bi-box-arrow-left"></i>
                                    Logout
                                </NavLink>
                                <span>
                                    Total {rtList.length} Unit RT
                                </span>
                            </div>
                        </div>
                        <div className="rt-grid">
                            {rtList.map((rt, index) => (
                                <div className="rt-card" key={rt.id}>
                                    <div className="rt-card-top">
                                        <div className="rt-number">
                                            {String(index + 1).padStart(
                                            2,
                                            "0"
                                            )}
                                        </div>
                                        <div className="rt-badge"> {rt.jabatan} </div>
                                    </div>
                                    <div className="form-group">
                                        <label>Nama Lengkap</label>
                                        <input
                                            type="text"
                                            value={rt.nama || ""}
                                            onChange={(e) => {
                                            const updated = [...rtList];
                                            updated[index].nama =
                                                e.target.value;
                                            setRtList(updated);
                                            }}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Nomor Telepon</label>
                                        <input
                                            type="text"
                                            value={rt.notelp || ""}
                                            onChange={(e) => {
                                            const updated = [...rtList];
                                            updated[index].notelp =
                                                e.target.value;
                                            setRtList(updated);
                                            }}
                                        />
                                    </div>
                                    <button
                                        className="save-btn"
                                        onClick={() => saveRT(rt)}
                                    >
                                    <i className="bi bi-check-circle"></i>
                                        Simpan {rt.jabatan}
                                    </button>
                                </div>
                            ))}
                        </div>
                        <div className="info-box">
                            <div className="info-icon">
                                <i className="bi bi-info-lg"></i>
                            </div>
                            <div>
                            <h3>Informasi Pembaruan Data</h3>
                            <p>
                                Setiap perubahan data pengurus akan
                                langsung diperbarui pada halaman
                                publik profil desa dan direktori
                                layanan warga. Pastikan nomor
                                telepon yang dimasukkan aktif untuk
                                memudahkan koordinasi darurat.
                            </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
}