import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hero from "./Hero.jsx";
import SpecialDishes from "./SpecialDishes";
import FilteredDishes from "./FilteredDishes";
import Header from "./Header";
import { AllMenus } from "./AllMenuContext";
import Checkout from "./Checkout.js";

function Menus() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Hero />

        <Routes>
          <Route path='/' element={
            <AllMenus>
              <SpecialDishes />
              <FilteredDishes />
            </AllMenus>
            }>
          </Route>
          <Route path="/checkout" element={
            <Checkout/>
          }>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Menus;
//<Route path="/" element={<Navigate to="/dashboard" replace />} />