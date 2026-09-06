import { useContext } from "react";

import AuthContext from "../context/AuthContext";

export default function useAdminAuth() {
  return useContext(AuthContext);
}
