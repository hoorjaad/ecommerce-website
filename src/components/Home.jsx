import React from "react";
import "../App.css";
import Products from "./Products";

function Home() {
  return (
    <div className="hero">
      <div className="card text-bg-dark">
        {/* Replace "path/to/image.jpg" with the actual path or URL of your image */}
        <img
          src="https://img.freepik.com/free-photo/image-sad-handsome-guy-feeling-disappointed-pouting-lips-looking-empty-space-distressed-st_1258-159109.jpg?t=st=1731006316~exp=1731009916~hmac=1d42ef0788107ce2e5829ebb27215564eb9bad0635255249480b2c3670335ec1&w=1380"
          className="card-img"
          alt="Card background"
        />
        <div className="card-img-overlay container">
          <h2
            style={{
              fontFamily: "Poppins, sans-serif",
              fontSize: "3vmax", // Adjusted to be responsive
              fontWeight: 700,
              lineHeight: "5vmax", // Adjusted to be responsive
              color: "rgb(33, 37, 41)",
            }}
          >
            $299.99
          </h2>
          <h3
            className="card-text"
            style={{
              fontFamily: "Poppins, sans-serif",
              fontSize: "2vmax", // Adjusted to be responsive
              fontWeight: 400,
              lineHeight: "3vmax", // Adjusted to be responsive
              color: "rgb(45, 58, 75)",
            }}
          >
            The Latest Winter Products for 2018
          </h3>
          <h1
            className="card-title"
            style={{
              fontFamily: "Poppins, sans-serif",
              fontSize: "8vmax", // Adjusted to be responsive
              fontWeight: 700,
              lineHeight: "7vmax", // Adjusted to be responsive
              color: "rgb(45, 58, 75)",
            }}
          >
            look hot with
            <br />
            2018 style
          </h1>
          <button className="btn btn-inverse margin-top-40">SHOP NOW</button>
        </div>
      </div>
      <Products></Products>
    </div>
  );
}

export default Home;
