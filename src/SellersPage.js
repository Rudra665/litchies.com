import React from "react";
import CustomAppBar from "./Components/Toolbar/appBar";
import "./app.css";
import Home from "./Components/sellersViews/Home/Home";
import Shops from "./Components/sellersViews/Shops/Shops";
import Features from "./Components/sellersViews/Features/Features";
import ContactUsForm from "./Components/form/ContactUsForm";
import About from "./Components/sellersViews/About/About";
import Footer from "./Components/sellersViews/Footer/Footer";
import JoinUsPage from "./Components/sellersViews/JoinUs/JoinUsPage";


const SellersPage = () => {
  return (
    <>
      <CustomAppBar />

      <Home />

      <About />

      <Features />

      <Shops />

      <JoinUsPage />

      <ContactUsForm />

      <Footer />
    </>
  );
};

export default SellersPage;
