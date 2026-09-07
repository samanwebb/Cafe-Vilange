import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

const ProductsContext = createContext(null);

export function ProductsProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadProducts = useCallback(async () => {
    try {
      const response = await fetch("http://localhost/cafe-api/products.php");

      const data = await response.json();

      if (data.success) {
        setProducts(data.products);
      }
    } catch (error) {
      console.error("خطا در دریافت محصولات:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  const updateProduct = useCallback((updatedProduct) => {
    setProducts((prev) =>
      prev.map((product) =>
        Number(product.id) === Number(updatedProduct.id)
          ? {
              ...product,
              ...updatedProduct,
            }
          : product,
      ),
    );
  }, []);

  useEffect(() => {
    loadProducts();
  }, [loadProducts]);

  const value = useMemo(
    () => ({
      products,
      loading,
      loadProducts,
      updateProduct,
    }),
    [products, loading, loadProducts, updateProduct],
  );

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
}

export function useProducts() {
  return useContext(ProductsContext);
}
