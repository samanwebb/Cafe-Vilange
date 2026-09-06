import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import styles from "./Admin.module.css";

export default function Admin() {
  const navigate = useNavigate();

  const [checkingAuth, setCheckingAuth] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await fetch(
          "http://localhost/cafe-api/check-auth.php",
          {
            credentials: "include",
          },
        );

        if (!response.ok) {
          navigate("/admin-login");
          return;
        }

        const data = await response.json();

        if (!data.authenticated) {
          navigate("/admin-login");
          return;
        }

        setCheckingAuth(false);
      } catch {
        navigate("/admin-login");
      }
    };

    checkAuth();
  }, [navigate]);

  if (checkingAuth) {
    return null;
  }

  const categories = [
    {
      title: "نوشیدنی‌های گرم",
      path: "/hot-coffee",
    },
    {
      title: "نوشیدنی‌های گرم بدون کافئین",
      path: "/hot-drinks-decaf",
    },
    {
      title: "نوشیدنی‌های سرد",
      path: "/iced-coffee",
    },
    {
      title: "آیس ماچا و اسپیرولینا",
      path: "/iced-matcha",
    },
    {
      title: "نوشیدنی‌های ایرانی",
      path: "/iranian-cold-drinks",
    },
    {
      title: "چای و دمنوش",
      path: "/tea-herbal",
    },
    {
      title: "ماکتل",
      path: "/mocktail",
    },
    {
      title: "شیک",
      path: "/shake",
    },
    {
      title: "اسموتی",
      path: "/smoothie",
    },
    {
      title: "فراپه",
      path: "/frappe",
    },
    {
      title: "دسر و کیک",
      path: "/dessert",
    },
  ];

  const logout = async () => {
    try {
      await fetch("http://localhost/cafe-api/logout.php", {
        method: "POST",
        credentials: "include",
      });
    } finally {
      navigate("/admin-login");
    }
  };

  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <header className={styles.header}>
          <div className={styles.titleBox}>
            <h1>پنل مدیریت ویلانج</h1>
            <p>مدیریت محصولات و قیمت‌ها</p>
          </div>

          <button type="button" onClick={logout} className={styles.logout}>
            خروج
          </button>
        </header>

        <section className={styles.grid}>
          {categories.map((category) => (
            <button
              key={category.path}
              type="button"
              onClick={() => navigate(category.path)}
              className={styles.card}
            >
              <span>{category.title}</span>
              <span className={styles.arrow}>←</span>
            </button>
          ))}
        </section>
      </div>
    </main>
  );
}
