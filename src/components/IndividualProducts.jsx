import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar"

function IndividualProducts() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProductDetail = async () => {
      try {
        const response = await axios.get(
          `https://dummyjson.com/products/${id}`
        );
        console.log("Product Detail Response:", response.data); // Log the response
        setProduct(response.data); // Assuming the product details are in the response data
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    };

    fetchProductDetail();
  }, [id]);
  if (!product) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <Navbar />
      <div className="container">
        <h2>{product.title}</h2>
        <div className="productDetails">
          <p>{product.description}</p>
          <p>Brand: {product.brand}</p>
          <p>Price: ${product.price}</p>
          <p>Rating: {product.rating}</p>
          <p>Stock: {product.stock}</p>
          <p>DiscountedPercentage:{product.discountPercentage}"</p>
          <img src={product.thumbnail} alt={product.title} />
        </div>
        <h3>Images</h3>
        <div>
          {product.images.map((image, index) => (
            <img key={index} src={image} alt={`Product ${index}`} />
          ))}
        </div>
      </div>
    </>
  );

}

export default IndividualProducts;
