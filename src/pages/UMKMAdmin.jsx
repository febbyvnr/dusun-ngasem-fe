import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { createPortal } from "react-dom";
import "../styles/umkmadmin.css";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function UMKMAdmin() {
    const [umkm, setUmkm] = useState([]);
    const [search, setSearch] = useState("");
    const [page, setPage] = useState(1);
    const perPage = 10;
    const [showModal, setShowModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [selectedUMKM, setSelectedUMKM] = useState(null);
    const [formData, setFormData] = useState({
        id: null,
        nama: "",
        foto: "",
        notelp: "",
        alamat: "",
        deskripsi: "",
    });

    useEffect(() => {
        fetchUMKM();
    }, []);

    useEffect(() => {
        if (showModal || showDeleteModal) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => { document.body.style.overflow = ''; };
    }, [showModal, showDeleteModal]);

    async function fetchUMKM() {
        try {
            const response = await fetch("/api/umkm");
            const data = await response.json();
            setUmkm(data);
        } catch (error) {
            console.log(error);
        }
    }

    function openAddModal() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setFormData({
            id: null,
            nama: "",
            foto: "",
            notelp: "",
            alamat: "",
            deskripsi: "",
        });
        setShowModal(true);
    }

    function openEditModal(item) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setFormData({
            id: item.id,
            nama: item.nama || "",
            foto: item.foto || "",
            notelp: item.notelp || "",
            alamat: item.alamat || "",
            deskripsi: item.deskripsi || "",
        });
        setShowModal(true);
    }

    function openDeleteModal(item) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setSelectedUMKM(item);
        setShowDeleteModal(true);
    }

    async function saveUMKM() {
        try {
            const method = formData.id ? "PUT" : "POST";
            await fetch("/api/umkm", {
                method,
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    ...formData,
                    foto: convertDriveLink(formData.foto),
                }),
            });
            setShowModal(false);
            fetchUMKM();
        } catch (error) {
            console.log(error);
        }
    }

    async function handleDelete() {
        try {
            await fetch("/api/delete-umkm", {
                method: "POST",
                headers: {
                    "Content-Type":
                        "application/json",
                },
                body: JSON.stringify({
                    id: selectedUMKM.id,
                }),
            });
            setShowDeleteModal(false);
            fetchUMKM();
        } catch (error) {
            console.log(error);
        }
    }

    const filtered = umkm.filter((item) =>
        item.nama
        ?.toLowerCase()
        .includes(search.toLowerCase())
    );

    const totalPages = Math.ceil(
        filtered.length / perPage
    );

    const start = (page - 1) * perPage;

    const paginated = filtered.slice(
        start,
        start + perPage
    );

    function convertDriveLink(url) {
        const match = url.match(/\/file\/d\/([a-zA-Z0-9_-]+)/);
        if (match) {
            return `https://drive.google.com/thumbnail?id=${match[1]}&szw=1000`;
        }
        return url;
    }

    return (
        <div>
            <section className="admin-hero">
                <div className="admin-hero-overlay">
                    <h1>Kelola UMKM</h1>
                    <p>Manajemen data unit usaha mikro kecil dan menengah di Padukuhan Ngasem.</p>
                </div>
            </section>
            <div className="umkm-admin-page">
                <div className="umkm-header">
                    <NavLink to="/admin" className="btn-switch">Admin</NavLink>
                    <button
                        className="save-btn-umkm"
                        onClick={openAddModal}
                    >
                    <i className="bi bi-plus-lg"></i>
                        Tambah UMKM
                    </button>
                </div>
                <div className="search-box">
                    <i className="bi bi-search"></i>
                    <input
                        type="text"
                        placeholder="Cari nama UMKM..."
                        value={search}
                        onChange={(e) =>
                            setSearch(e.target.value)
                        }
                    />
                </div>
                <div className="table-wrapper">
                    <table className="umkm-table">
                        <thead>
                            <tr>
                                <th>FOTO</th>
                                <th>NAMA</th>
                                <th>TELEPON</th>
                                <th>ALAMAT</th>
                                <th>DESKRIPSI</th>
                                <th>AKSI</th>
                            </tr>
                        </thead>
                        <tbody>
                            {paginated.map((item) => (
                                <tr key={item.id}>
                                    <td>
                                        <img
                                            src={item.foto}
                                            alt={item.nama}
                                            className="umkm-image"
                                        />
                                    </td>
                                    <td className="umkm-name">
                                        {item.nama}
                                    </td>
                                    <td>{item.notelp}</td>
                                    <td>{item.alamat}</td>
                                    <td>{item.deskripsi}</td>
                                    <td>
                                    <div className="table-action">
                                        <button
                                            onClick={() =>
                                                openEditModal(item)
                                            }
                                        >
                                            <i className="bi bi-pencil"></i>
                                        </button>
                                        <button
                                            onClick={() =>
                                                openDeleteModal(item)
                                            }
                                        >
                                            <i className="bi bi-trash"></i>
                                        </button>
                                    </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className="pagination-wrapper">
                        <p>
                            Menampilkan{" "}
                            {filtered.length === 0
                            ? 0
                            : start + 1}
                            -
                            {Math.min(
                                start + perPage,
                                filtered.length
                            )}{" "}
                            dari {filtered.length} UMKM
                        </p>
                        <div className="pagination">
                            <button
                                disabled={page === 1}
                                onClick={() =>
                                    setPage(page - 1)
                                }
                            >
                                <i className="bi bi-chevron-left"></i>
                            </button>
                            {[...Array(totalPages)].map(
                                (_, index) => (
                                    <button
                                    key={index}
                                    className={
                                        page === index + 1
                                        ? "active"
                                        : ""
                                    }
                                    onClick={() =>
                                        setPage(index + 1)
                                    }
                                    >
                                    {index + 1}
                                    </button>
                                )
                            )}
                            <button
                                disabled={page === totalPages}
                                onClick={() =>
                                    setPage(page + 1)
                                }
                            >
                                <i className="bi bi-chevron-right"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {showModal && createPortal (
                <div className="modal-overlay">
                    <div className="modal-box">
                        <div className="modal-header">
                            <h2>
                                {formData.id
                                    ? "Edit UMKM"
                                    : "Tambah UMKM"}
                            </h2>
                            <button
                                className="close-btn"
                                onClick={() =>
                                    setShowModal(false)
                                }
                            >
                                <i className="bi bi-x-lg"></i>
                            </button>
                        </div>
                        <div className="modal-form">
                            <div className="form-group">
                                <label>Nama UMKM</label>
                                <input
                                    type="text"
                                    value={formData.nama}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            nama:
                                                e.target.value,
                                        })
                                    }
                                />
                            </div>
                            <div className="form-group">
                                <label>Foto URL (Drive)</label>
                                <input
                                    type="text"
                                    value={formData.foto}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            foto:
                                                e.target.value,
                                        })
                                    }
                                />
                            </div>
                            <div className="form-group">
                                <label>Nomor Telepon</label>
                                <input
                                    type="text"
                                    value={formData.notelp}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            notelp:
                                                e.target.value,
                                        })
                                    }
                                />
                            </div>
                            <div className="form-group">
                                <label>Alamat</label>
                                <input
                                    type="text"
                                    value={formData.alamat}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            alamat:
                                                e.target.value,
                                        })
                                    }
                                />
                            </div>
                            <div className="form-group">
                                <label>Deskripsi</label>
                                <textarea
                                    rows="5"
                                    value={
                                        formData.deskripsi
                                    }
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            deskripsi:
                                                e.target.value,
                                        })
                                    }
                                />
                            </div>
                            <div className="modal-actions">
                                <button
                                    className="modal-cancel-btn"
                                    onClick={() => setShowModal(false)}
                                >
                                    Batal
                                </button>
                                <button
                                    className="modal-save-btn"
                                    onClick={saveUMKM}
                                >
                                    Simpan UMKM
                                </button>
                            </div>
                        </div>
                    </div>
                </div>,
                document.body
            )}
            {showDeleteModal && createPortal (
                <div className="modal-overlay">
                    <div className="delete-modal">
                        <div className="delete-icon">
                            <i className="bi bi-trash3"></i>
                        </div>
                        <h2>Hapus UMKM?</h2>
                        <p>
                            Apakah anda yakin ingin
                            menghapus UMKM{" "}
                            <strong>
                                {selectedUMKM?.nama}
                            </strong>
                            ?
                        </p>
                        <div className="delete-actions">
                            <button
                                className="cancel-btn"
                                onClick={() =>
                                    setShowDeleteModal(
                                        false
                                    )
                                }
                            >
                                Batal
                            </button>
                            <button
                                className="delete-btn"
                                onClick={handleDelete}
                            >
                                Hapus
                            </button>
                        </div>
                    </div>
                </div>,
                document.body
            )}
        </div>
    );
}