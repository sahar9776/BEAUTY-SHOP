import { Navigate, Route, Routes } from "react-router-dom";
import Home from './pages/home/Home'
import Header from "./components/header/Header";
import SkinCare from "./pages/skinCare/SkinCare";
import HairCare from "./pages/hairCare/HairCare";
import Cosmetic from "./pages/cosmetic/Cosmetic";
import Perfume from "./pages/perfume/Perfume";
import ProductDetails from "./pages/productDetails/ProductDetails";
import Footer from "./components/footer/Footer";
import Sidebar from "./components/sidebar/Sidebar";
import BackToTop from "./components/backToTop/BackToTop";
import NotFound from "./pages/notfound/NotFound";
import AboutUs from "./pages/aboutUs/AboutUs";
function App() {
  return (
    <div className="App">
      {/* Sidebar */}
      <Sidebar />
      {/* Header */}
      <Header />
      {/* pages  */}
      <Routes>
        {/* <Route path="" element={} /> */}
        <Route path="/about" element={<AboutUs />} />
        <Route path="/:category/:tag/:id" element={<ProductDetails />} />
        <Route path="/perfume" element={<Perfume />} />
        <Route path="/cosmetic" element={<Cosmetic />} />
        <Route path="/hair-care" element={<HairCare />} />
        <Route path="/skin-care" element={<SkinCare />} />
        <Route path="/home" element={<Navigate to={'/'} replace />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <BackToTop />
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
