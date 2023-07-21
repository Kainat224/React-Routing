import React from "react";
import NavBar from "./useLocation/NavBar";
import { Routes, Route } from "react-router-dom";
import Home from "./useLocation/Home";
import Features from "./useLocation/Features";
import Pricing from "./useLocation/Pricing";
import TodosList from "./useLocation/TodosList";

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/todoslist" element={<TodosList />} />
      </Routes>
    </>
  );
};

export default App;
