import { useEffect, useState } from "react";
import "./App.css";

export default function App() {
  const [umkm, setUmkm] = useState([]);
  const [form, setForm] = useState({
    nama: "",
    foto: "",
    notelp: "",
    alamat: "",
  });

  const [sambutan, setSambutan] = useState({
    video: "",
    text: "",
  });

  useEffect(() => {
    fetch("`${import.meta.env.VITE_API_URL}/api/data`")
      .then((res) => res.json())
      .then((data) => {
        if (data.umkm) setUmkm(data.umkm);
        if (data.sambutan) setSambutan(data.sambutan);
      });
  }, []);

  const handleSaveUMKM = () => {
    fetch(`${import.meta.env.VITE_API_URL}/api/umkm`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    }).then(() => {
      fetch(`${import.meta.env.VITE_API_URL}/api/data`)
        .then((res) => res.json())
        .then((data) => setUmkm(data.umkm));
    });
  };

  const handleSaveSambutan = () => {
    fetch(`${import.meta.env.VITE_API_URL}/api/sambutan`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(sambutan),
    });
  };

  return (
    <div className="page">
      <div className="section">
        <div className="header">
          <div className="header-left">TAMPILAN USER</div>
          <div className="header-right">EDITOR - ADMIN</div>
        </div>
        <div className="content">
          <div className="box user">
            <h2>UMKM LIST</h2>
            <div className="umkm-grid">
              {umkm.map((item, i) => (
                <div className="card" key={i}>
                  <img src={item.foto} alt="" />
                  <h3>{item.nama}</h3>
                  <p>{item.notelp}</p>
                  <p>{item.alamat}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="box admin">
            <h2>Edit UMKM</h2>
            <input
              placeholder="Nama UMKM"
              value={form.nama}
              onChange={(e) => setForm({ ...form, nama: e.target.value })}
            />
            <input
              placeholder="Link Foto (Drive)"
              value={form.foto}
              onChange={(e) => setForm({ ...form, foto: e.target.value })}
            />
            <input
              placeholder="No Telp"
              value={form.notelp}
              onChange={(e) => setForm({ ...form, notelp: e.target.value })}
            />
            <input
              placeholder="Alamat"
              value={form.alamat}
              onChange={(e) => setForm({ ...form, alamat: e.target.value })}
            />
            <button onClick={handleSaveUMKM}>Update UMKM</button>
          </div>
        </div>
      </div>
      <div className="section">
        <div className="header">
          <div className="header-left">TAMPILAN USER</div>
          <div className="header-right">EDITOR - ADMIN</div>
        </div>
        <div className="content">
          <div className="box user">
            <h2>SAMBUTAN KEPALA DESA</h2>
            <div className="video-box">
              <iframe
                src={sambutan.video}
                title="video"
              />
            </div>
            <div className="desc-box">
              {sambutan.text}
            </div>
          </div>
          <div className="box admin">
            <h2>Edit Sambutan</h2>
            <input
              placeholder="Link YouTube"
              value={sambutan.video}
              onChange={(e) =>
                setSambutan({ ...sambutan, video: e.target.value })
              }
            />
            <textarea
              placeholder="Isi sambutan"
              value={sambutan.text}
              onChange={(e) =>
                setSambutan({ ...sambutan, text: e.target.value })
              }
            />
            <button onClick={handleSaveSambutan}>
              Update Sambutan
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}