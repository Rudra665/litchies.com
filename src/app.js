import React from "react";

import { Route, Routes } from "react-router-dom";
import CustomerPage from "./CustomerPage";
import Seller from "./Seller";

const App = () => {
  return (
    <>
      <div>
        <Routes>
          <Route exact path="/" element={<CustomerPage />}></Route>
          <Route exact path="/Seller" element={<Seller />}></Route>
        </Routes>
      </div>
    </>
  );
};

export default App;
