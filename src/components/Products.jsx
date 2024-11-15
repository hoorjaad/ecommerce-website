import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import React from "react";
import { Link } from "react-router-dom";

function Products() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      const products = await response.json();
      setData(products);
      setFilter(products); // Set filter to include all products initially
      setLoading(false);
    };
    getProducts();
  }, []);

  const Loading = () => {
    return (
      <>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
      </>
    );
  };

  const filterProduct = (category) => {
    if (category === "all") {
      setFilter(data);
    } else {
      const filteredProducts = data.filter(
        (product) => product.category === category
      );
      setFilter(filteredProducts);
    }
  };

  const ShowProducts = () => {
    return (
      <>
        <div className="buttons d-flex justify-content-center mb-5 pb-5">
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => filterProduct("all")}
          >
            All
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => filterProduct("men's clothing")}
          >
            Men's Clothing
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => filterProduct("women's clothing")}
          >
            Women's Clothing
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => filterProduct("jewelery")}
          >
            Jewelry
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => filterProduct("electronics")}
          >
            Electronics
          </button>
        </div>
        <div className="row">
          {filter.map((product) => (
            <div className="col-md-3 mb-4" key={product.id}>
              <Link
                to={`/product/${product.id}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <div className="card shadow-sm">
                  <img
                    src={product.image}
                    className="card-img-top"
                    alt={product.title}
                    style={{ height: "200px", objectFit: "contain" }}
                  />
                  <div className="card-body">
                    <h5
                      className="card-title text-truncate"
                      style={{
                        fontFamily: "Poppins, sans-serif",
                        fontSize: "16px",
                        fontWeight: 600,
                      }}
                    >
                      {product.title}
                    </h5>
                    <div className="d-flex justify-content-between align-items-center">
                      <span className="text-muted">${product.price}</span>
                      <button
                        className="btn btn-sm"
                        style={{
                          backgroundColor: "#ffe115",
                          color: "#2d3a4b",
                          fontFamily: "Poppins, sans-serif",
                          fontSize: "14px",
                          fontWeight: 700,
                          border: "none",
                        }}
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </>
    );
  };

  return (
    <div>
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className="display-6 fw-bolder text-center">Latest Products</h1>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center">
          {loading ? <Loading /> : <ShowProducts />}
        </div>
      </div>
    </div>
  );
}

export default Products;
