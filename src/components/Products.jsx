import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

function Product() {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          `https://dummyjson.com/products${
            category ? `?category=${category}` : ""
          }`
        );
        setProducts(response.data.products); // Assuming the products are in the response data
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, [category]); // Update products when the category changes

  const handleProductClick = (productId) => {
    navigate(`/products/${productId}`);
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <Navbar />
      <div className="row">
        {products.map((product) => (
          <div key={product.id} className="col-md-4 mb-4">
            <div
              className="card"
              onClick={() => handleProductClick(product.id)}
            >
              <Link to={`/products/${product.id}`}>
                <img
                  src={product.thumbnail}
                  className="card-img-top"
                  alt={product.title}
                />
              </Link>
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">{product.description}</p>
                <p className="card-text">Price: ${product.price}</p>
                <p className="card-text">
                  Rating: {product.rating} ({product.stock} in stock)
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Product;
