import React from "react";

import { Route, Routes } from "react-router-dom";
import CustomerPage from "./CustomerPage";
import SellersPage from "./SellersPage";

const App = () => {
  return (
    <>
      <div>
        <Routes>
          <Route exact path="/" element={<CustomerPage />}></Route>
          <Route exact path="/SellersPage" element={<SellersPage />}></Route>
        </Routes>
      </div>
    </>
  );
};

export default App;
