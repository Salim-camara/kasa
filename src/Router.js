import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Error from "./pages/Error";
import Home from "./pages/Home";
import Sheet from "./pages/Sheet";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/logement/:id" element={<Sheet />}></Route>
        <Route path="/error" element={<Error />}></Route>
        <Route path="/error" element={<Error />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
