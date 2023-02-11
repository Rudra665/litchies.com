import React from "react";

import { Route, Routes } from "react-router-dom";
import CustomerPage from "./CustomerPage";
import Seller from "./Seller";
import TermsCondition from "./Terms&Condition";
import AppLink from "./Components/appLinkJson/appLink";

const App = () => {
  return (
    <>
      <div>
        <Routes>
          <Route exact path="/" element={<CustomerPage />}></Route>
          <Route path="*" element={<CustomerPage />}></Route>
          <Route path="/.well-known/assetlinks.json" element={<AppLink />}></Route>
          <Route exact path="/Seller" element={<Seller />}></Route>
          <Route exact path="/termscondition" element={<TermsCondition />}></Route>
        </Routes>
      </div>
    </>
  );
};

export default App;
