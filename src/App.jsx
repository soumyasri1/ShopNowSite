import "./App.css";
import Home from "./components/Home.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom"; // Use BrowserRouter instead of Router
import Product from "./components/Products.jsx";
import Categories from "./components/Categories.jsx"
import ProductByCategory from "./components/ProductByCategory.jsx"
import IndividualProducts from "./components/IndividualProducts.jsx";
import Footer from "./components/Footer.jsx";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/products" element={<Product />} />
          <Route path="/categories" element={<Categories />} />
          <Route
            path="/products/category/:category/*"
            element={<ProductByCategory />}
          />
          <Route path="/" element={<Home />} />
          <Route path="/products/:id" element={<IndividualProducts />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
