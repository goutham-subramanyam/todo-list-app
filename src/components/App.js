import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Home from "../components/Home";

const Main = () => {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Home/>
    </BrowserRouter>
  );
};

export default Main;
