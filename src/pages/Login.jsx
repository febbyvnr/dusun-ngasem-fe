import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/login.css";

const Login = () => {
    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();
        if (
            username === "admngasem2026" &&
            password === "6D2A@M892"
        ) {
            navigate("/admin");
        } else {
            setError("Username atau password salah");
        }
    };

    return (
        <div className="login-page">
            <div className="login-overlay">
                <form className="login-container" onSubmit={handleLogin}>
                <h1>Login Admin</h1>
                <p className="login-subtitle">
                    Sistem Informasi Padukuhan Ngasem
                </p>
                <div className="form-group">
                    <label>Username</label>
                    <input
                        type="text"
                        placeholder="Masukkan username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input
                        type="password"
                        placeholder="Masukkan password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                {error && <p className="error-text">{error}</p>}
                <button type="submit" className="login-btn">
                    Masuk
                </button>
                </form>
            </div>
        </div>
    );
};

export default Login;