import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";

const Menu = lazy(() => import("./pages/Menu"));
const AboutCafe = lazy(() => import("./components/AboutCafe"));
const HotCoffee = lazy(() => import("./pages/products/HotCoffee"));
const HotDrinksDecaf = lazy(() => import("./pages/products/HotDrinksDecaf"));
const IcedCoffee = lazy(() => import("./pages/products/IcedCoffee"));
const IcedMatcha = lazy(() => import("./pages/products/IcedMatcha"));
const IranianColdDrinks = lazy(() =>
  import("./pages/products/IranianColdDrinks"),
);
const TeaHerbal = lazy(() => import("./pages/products/TeaHerbal"));
const Mocktail = lazy(() => import("./pages/products/Mocktail"));
const Shake = lazy(() => import("./pages/products/Shake"));
const Smoothie = lazy(() => import("./pages/products/Smoothie"));
const Frappe = lazy(() => import("./pages/products/Frappe"));
const Dessert = lazy(() => import("./pages/products/Dessert"));
const AdminLogin = lazy(() => import("./pages/AdminLogin"));
const Admin = lazy(() => import("./pages/Admin"));

function App() {
  return (
    <Suspense fallback={null}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about-cafe" element={<AboutCafe />} />
        <Route path="/hot-coffee" element={<HotCoffee />} />
        <Route path="/hot-drinks-decaf" element={<HotDrinksDecaf />} />
        <Route path="/iced-coffee" element={<IcedCoffee />} />
        <Route path="/iced-matcha" element={<IcedMatcha />} />
        <Route path="/iranian-cold-drinks" element={<IranianColdDrinks />} />
        <Route path="/tea-herbal" element={<TeaHerbal />} />
        <Route path="/mocktail" element={<Mocktail />} />
        <Route path="/shake" element={<Shake />} />
        <Route path="/smoothie" element={<Smoothie />} />
        <Route path="/frappe" element={<Frappe />} />
        <Route path="/dessert" element={<Dessert />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </Suspense>
  );
}

export default App;
