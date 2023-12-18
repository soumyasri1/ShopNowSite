import React, { useState, useEffect, useRef } from "react";
import Navbar from "./Navbar.jsx";
import axios from "axios";

const aestheticColors = ["#F4C76C", "#F8A05F", "#779393", "#B5B2CF", "#B2CCFF"];

function Home() {
  const [products, setProducts] = useState([]);
  const [backgroundColor, setBackgroundColor] = useState("#FA9A0F");
  const carouselRef = useRef(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://dummyjson.com/products");
        setProducts(response.data.products || []);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.addEventListener("slide.bs.carousel", (e) => {
        handleSlide();
      });
    }
  }, [products]);

  const getRandomColor = () => {
    // Choose a random color from the aestheticColors array
    const randomIndex = Math.floor(Math.random() * aestheticColors.length);
    const randomColor = aestheticColors[randomIndex];
    console.log("Random color:", randomColor);
    return randomColor;
  };

  const handleSlide = () => {
    setTimeout(() => {
      const randomColor = getRandomColor();
      setBackgroundColor(randomColor);
    }, 300);
  };

  console.log("Background color:", backgroundColor);

  return (
    <>
      <Navbar />
      <div
        id="carouselExampleInterval"
        className="carousel slide"
        data-bs-ride="carousel"
        ref={carouselRef}
      >
        <div
          className="carousel-inner"
          style={{
            backgroundColor: backgroundColor,
            transition: "background-color 2s ease",
          }}
        >
          {products.map((product, index) => (
            <div
              key={index}
              className={`carousel-item ${index === 0 ? "active" : ""}`}
              data-bs-interval="1000"
            >
              <img
                src={product.thumbnail}
                className="d-block w-100 carousal-image"
                alt={product.title}
                style={{ height: "80vh", objectFit: "contain" }}
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>{product.title}</h5>
                <p>{product.description}</p>
                <p>Price: ${product.price}</p>
              </div>
            </div>
          ))}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}

export default Home;
