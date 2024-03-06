import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import About from "./pages/About";
import Tours from "./pages/Tours";
import { Toaster } from "react-hot-toast";
import DetailPage from "./pages/DetailPage";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
function App() {
  return (
    <>
      <Router>
        <Toaster position="bottom-right" toastOptions={{ duration: 2000 }} />
        <ScrollToTop>

        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/about" element={<About />} />
          <Route path="/tours" element={<Tours />} />
          <Route path="/tour/:id" element={<DetailPage />}></Route>
        
        </Routes>
        <Footer />
        </ScrollToTop>
      </Router>
    </>
  );
}

export default App;
