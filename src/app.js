import React from "react";
import { Navigate, Route, Routes} from "react-router-dom";
import CustomerPage from "./CustomerPage";
import Seller from "./Seller";
import TermsCondition from "./Terms&Condition";
import AssetLinks from "./Components/Assetlinks";


const App = () => {
  return (
    <>
      <div>
        <Routes>
        <Route exact path="/" element={<CustomerPage />}></Route>
          <Route path="/Seller" element={<Seller />}></Route>
          <Route path="/termscondition" element={<TermsCondition />}></Route>
          <Route path="*"/>
        </Routes>
      </div>
    </>
  );
};

export default App;
