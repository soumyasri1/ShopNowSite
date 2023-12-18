import React from 'react';
import {Link} from 'react-router-dom';
import Categories from "./Categories";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary navbar-container">
      <div className="container-fluid">
        <div>
          <img
            src="/logo-image.png"
            alt="Shop"
            style={{
              width: "50px",
              height: "50px",
            }}
          />{" "}
        </div>
        <a className="navbar-brand" href="#" style={{ marginLeft: "10px" }}>
          <span style={{ color: "#FABA0F" }}>Shop</span>
          <span style={{ color: "#e74c3c" }}>Now</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                to="/"
                className="nav-link active  home-link"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/products " className="nav-link  product-link">
                Products
              </Link>
            </li>
            <li className="nav-item dropdown  categories-link">
              <Link
                to="/categories"
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Categories
              </Link>
              <ul className="dropdown-menu">
                <Categories />
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
