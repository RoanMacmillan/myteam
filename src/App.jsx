import { useState } from "react";
import Header from "./components/Header/Header";
import About from "./pages/About";
import Home from "./pages/Home";
import Contact from "./pages/contact";
import "./globals.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
    <main className="bg-midnightGreen">
      <BrowserRouter> 
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      </main>
    </>
  );
}

export default App;
