// ProductByCategory.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link,Routes,Route } from "react-router-dom";
import IndividualProducts from "./IndividualProducts";
import Navbar from "./Navbar";

function ProductByCategory() {
  const [products, setProducts] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    const fetchProductsByCategory = async () => {
      try {
        const response = await axios.get(
          `https://dummyjson.com/products/category/${category}`
        );
        setProducts(response.data.products || []);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProductsByCategory();
  }, [category]);

  return (
    <>
  <Navbar />
  <div className="product-container">
    <h2 className="category-heading">{category}</h2>
    <ul className="product-list">
      {products && products.length > 0 ? (
        products.map((product) => (
          <li key={product.id} className="product-item">
            <div className="product-details">
              <h3 className="product-title">{product.title}</h3>
              <p className="product-description">{product.description}</p>
              <p className="product-price">Price: ${product.price}</p>
              <img
                src={product.thumbnail}
                alt={product.title}
                className="product-image"
              />
              <Link
                to={`/products/${product.id}`}
                className="view-details-link"
              >
                View Details
              </Link>
            </div>
          </li>
        ))
      ) : (
        <li>No products available for this category</li>
      )}
    </ul>
    <Routes>
      <Route
        path="/products/:productId/*"
        element={<IndividualProducts />}
      />
    </Routes>
  </div>
</>
  )
}

export default ProductByCategory;
