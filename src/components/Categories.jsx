import React, { useState, useEffect } from "react";
import axios from "axios";
import {Link} from "react-router-dom"

function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(
          "https://dummyjson.com/products/categories"
        );
        console.log("Response:", response.data);
        setCategories(response.data || []);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div className="categories-container">
      <ul className="list-group categories-list-group">
        {categories && categories.length > 0 ? (
          categories.map((category) => (
            <li key={category} className="list-group-item categories-list-item">
              <Link to={`/products/category/${category}`}>{category}</Link>
            </li>
          ))
        ) : (
          <li className="list-group-item no-categories">
            No categories available
          </li>
        )}
      </ul>
    </div>
  );
}

export default Categories;
