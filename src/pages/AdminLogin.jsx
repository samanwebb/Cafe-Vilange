import { useState } from "react";
import { useNavigate } from "react-router-dom";

import useAdminAuth from "../hooks/useAdminAuth";

import styles from "./AdminLogin.module.css";

export default function AdminLogin() {
  const navigate = useNavigate();
  const { refreshAuth } = useAdminAuth();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await fetch("http://localhost/cafe-api/login.php", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });

      const data = await response.json();

      if (data.success) {
        await refreshAuth();
        navigate("/admin");
      } else {
        setError(data.message);
      }
    } catch {
      setError("ارتباط با سرور برقرار نشد");
    }
  };

  return (
    <main className={styles.adminPage}>
      <form className={styles.loginCard} onSubmit={handleLogin}>
        <div className={styles.logo}>
          <span>VILANGE CAFE</span>

          <h1>پنل مدیریت ویلانج</h1>

          <p>ورود مدیر کافه</p>
        </div>

        <div className={styles.form}>
          <input
            className={styles.input}
            type="text"
            placeholder="نام کاربری"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
              setError("");
            }}
          />

          <input
            className={styles.input}
            type="password"
            placeholder="رمز عبور"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setError("");
            }}
          />

          {error && <p className={styles.error}>{error}</p>}

          <button className={styles.loginButton} type="submit">
            ورود به پنل
          </button>

          <button
            className={styles.backButton}
            type="button"
            onClick={() => navigate("/")}
          >
            بازگشت به سایت
          </button>
        </div>
      </form>
    </main>
  );
}
