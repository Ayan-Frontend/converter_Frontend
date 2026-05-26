import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Pricing from "./pages/Pricing";
import Login from "./pages/Login";
import Converter from "./pages/Converter";
import ConversionHistory from "./components/ConversionHistory";
import Toast from "./components/Toast";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Register from "./pages/Register";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Toast />
      <Routes>
        {/* HOME */}

        <Route path="/" element={<Home />} />

        {/* CONVERTER */}

        <Route path="/converter" element={<Converter />} />

        {/* DASHBOARD */}

        <Route path="/dashboard" element={<Dashboard />} />

        {/* PRICING */}

        <Route path="/pricing" element={<Pricing />} />

        {/* LOGIN */}

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
