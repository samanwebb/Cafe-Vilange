import { useCallback, useEffect, useMemo, useState } from "react";

import AuthContext from "./AuthContext";

export default function AuthProvider({ children }) {
  const [isAdmin, setIsAdmin] = useState(false);
  const [checking, setChecking] = useState(true);

  const checkAuth = useCallback(async () => {
    try {
      const response = await fetch("http://localhost/cafe-api/check-auth.php", {
        credentials: "include",
      });

      if (!response.ok) {
        setIsAdmin(false);
        return;
      }

      const data = await response.json();

      setIsAdmin(data.authenticated === true);
    } catch {
      setIsAdmin(false);
    } finally {
      setChecking(false);
    }
  }, []);

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  const value = useMemo(
    () => ({
      isAdmin,
      checking,
      refreshAuth: checkAuth,
    }),
    [isAdmin, checking, checkAuth],
  );

  return (
    <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
  );
}
