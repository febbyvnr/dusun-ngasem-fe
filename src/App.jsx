import { useEffect, useState } from "react";
import "./App.css";

export default function App() {
  const [umkm, setUmkm] = useState([]);
  
  const [displaySambutan, setDisplaySambutan] = useState({
    video: "",
    text: "",
  });

  const [formUMKM, setFormUMKM] = useState({
    nama: "",
    foto: "",
    notelp: "",
    alamat: "",
  });

  const [formSambutan, setFormSambutan] = useState({
    video: "",
    text: "",
  });

  const fetchData = () => {
    fetch(`/api/data`)
      .then((res) => res.json())
      .then((data) => {
        if (data.umkm) {
          setUmkm(data.umkm);
          if (data.umkm.length > 0) {
            setFormUMKM({
              nama: data.umkm[0].nama || "",
              foto: data.umkm[0].foto || "",
              notelp: data.umkm[0].notelp || "",
              alamat: data.umkm[0].alamat || "",
            });
          }
        }
        if (data.sambutan) {
          setDisplaySambutan(data.sambutan);
          setFormSambutan({
            video: data.sambutan.video || "",
            text: data.sambutan.text || "",
          });
        }
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSaveUMKM = () => {
    fetch(`/api/umkm`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formUMKM),
    }).then(() => {
      fetchData();
      setFormUMKM({ nama: "", foto: "", notelp: "", alamat: "" });
      alert("UMKM Berhasil diperbarui!");
    });
  };

  const handleSaveSambutan = () => {
    fetch(`/api/sambutan`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formSambutan),
    }).then(() => {
      fetchData();
      setFormSambutan({ ...formSambutan, text: "" });
      alert("Sambutan Berhasil diperbarui!");
    });
  };
  return (
    <div className="page">
      {/* SECTION UMKM */}
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
                  <img src={item.foto} alt="Foto UMKM" />
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
              value={formUMKM.nama}
              onChange={(e) => setFormUMKM({ ...formUMKM, nama: e.target.value })}
            />
            <input
              placeholder="Link Foto (Drive)"
              value={formUMKM.foto}
              onChange={(e) => setFormUMKM({ ...formUMKM, foto: e.target.value })}
            />
            <input
              placeholder="No Telp"
              value={formUMKM.notelp}
              onChange={(e) => setFormUMKM({ ...formUMKM, notelp: e.target.value })}
            />
            <input
              placeholder="Alamat"
              value={formUMKM.alamat}
              onChange={(e) => setFormUMKM({ ...formUMKM, alamat: e.target.value })}
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
              {displaySambutan.video && (
                <iframe
                  src={displaySambutan.video.replace("watch?v=", "embed/")}
                  title="video"
                />
              )}
            </div>
            <div className="desc-box">
              {displaySambutan.text}
            </div>
          </div>
          <div className="box admin">
            <h2>Edit Sambutan</h2>
            <input
              placeholder="Link YouTube"
              value={formSambutan.video}
              onChange={(e) =>
                setFormSambutan({ ...formSambutan, video: e.target.value })
              }
            />
            <textarea
              placeholder="Isi sambutan"
              value={formSambutan.text}
              onChange={(e) =>
                setFormSambutan({ ...formSambutan, text: e.target.value })
              }
            />
            <button onClick={handleSaveSambutan}>Update Sambutan</button>
          </div>
        </div>
      </div>
    </div>
  );
}