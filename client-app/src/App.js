import Shop from "./Components/Shop/Shop.js";
import Contact from "./Components/Contact/Contact.js";
import NavigationBar from "./Components/NavigationBar/NavigationBarContainer";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";

import React from "react";
import About from "./Components/About/About.js";
import Admin from "./Components/Admin/Admin.js";
import Basket from "./Components/Basket/Basket.js";
import BasketPage from "./Components/BasketPage/BasketPage.js";

function App() {
  const [showNav, setShowNav] = React.useState(true);
  const [itemsInBasket, setItemsInBasket] = React.useState([]);


  return (
    <div className="App">
      <BrowserRouter>
        {showNav && (
          <div>
            <NavigationBar />
            <Basket itemsInBasket={itemsInBasket}></Basket>
          </div>
        )}

        <Routes>
          <Route
            path="/"
            element={
              <Shop
                funcNav={setShowNav}
                itemsInBasket={itemsInBasket}
                setItemsInBasket={setItemsInBasket}
              />
            }
          />
          <Route path="contact" element={<Contact funcNav={setShowNav} />} />
          <Route path="about" element={<About funcNav={setShowNav} />} />
          <Route path="admin" element={<Admin funcNav={setShowNav} />} />
          <Route path="basket" element={<BasketPage funcNav={setShowNav} itemsInBasket={itemsInBasket}/>} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
