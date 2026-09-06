import { useState } from "react";

import { useProducts } from "../context/ProductsContext";

import useAdminAuth from "../hooks/useAdminAuth";

import styles from "./GlobalProduct.module.css";

export default function ProductCard({ item, category }) {
  const { isAdmin, checking } = useAdminAuth();

  const { products, updateProduct } = useProducts();

  const serverProduct = products.find(
    (p) => p.category === category && Number(p.source_id) === Number(item.id),
  );

  const product = serverProduct
    ? {
        ...item,
        ...serverProduct,
        englishName: serverProduct.english_name,
      }
    : item;

  const [isEditing, setIsEditing] = useState(false);

  const [form, setForm] = useState({
    name: item?.name || "",
    englishName: item?.englishName || "",
    price: item?.price || "",
    ingredients: item?.ingredients || "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const openEdit = () => {
    if (!isAdmin) {
      return;
    }

    setForm({
      name: product?.name || "",
      englishName: product?.englishName || "",
      price: product?.price || "",
      ingredients: product?.ingredients || "",
    });

    setIsEditing(true);
  };

  const saveChanges = async () => {
    if (!isAdmin) {
      setIsEditing(false);
      return;
    }

    try {
      const response = await fetch(
        "http://localhost/cafe-api/update-product.php",
        {
          method: "POST",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id: product.id,
            name: form.name,
            englishName: form.englishName,
            price: form.price,
            ingredients: form.ingredients,
          }),
        },
      );

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.message || "خطا در ذخیره محصول");
      }

      updateProduct({
        id: product.id,
        name: form.name,
        english_name: form.englishName,
        price: form.price,
        ingredients: form.ingredients,
      });

      setIsEditing(false);
    } catch (error) {
      console.error("خطا در ذخیره محصول:", error);
    }
  };

  return (
    <div className={styles.info}>
      <div className={styles.top}>
        <div>
          <h3>{product.name}</h3>
          <small>{product.englishName}</small>
        </div>
      </div>

      {product.ingredients && (
        <span className={styles.ingredients}>{product.ingredients}</span>
      )}

      <div className={styles.tags}>
        {product.caffeine && <span>{product.caffeine}</span>}
        {product.bitterness && <span>{product.bitterness}</span>}
        {product.size && <span>{product.size}</span>}
        {product.milk && <span>{product.milk}</span>}
      </div>

      <div className={styles.bottom}>
        <strong>
          {product.price ? `${product.price} تومان` : "قیمت ثبت نشده"}
        </strong>

        {!checking && isAdmin && (
          <button type="button" onClick={openEdit}>
            ویرایش
          </button>
        )}
      </div>

      {!checking && isAdmin && isEditing && (
        <div className={styles.editBox}>
          <h4>ویرایش محصول</h4>

          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="نام محصول"
          />

          <input
            type="text"
            name="englishName"
            value={form.englishName}
            onChange={handleChange}
            placeholder="نام انگلیسی"
          />

          <input
            type="text"
            name="price"
            value={form.price}
            onChange={handleChange}
            placeholder="قیمت"
          />

          <textarea
            name="ingredients"
            value={form.ingredients}
            onChange={handleChange}
            placeholder="ترکیبات"
          />

          <div className={styles.editButtons}>
            <button type="button" onClick={saveChanges}>
              ذخیره تغییرات
            </button>

            <button type="button" onClick={() => setIsEditing(false)}>
              لغو
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
