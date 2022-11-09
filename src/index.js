import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import CustomerPage from "./CustomerPage";
import SellersPage from "./SellersPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CustomerPage />} ></Route>
        <Route path="/SellersPage" element={<SellersPage />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
