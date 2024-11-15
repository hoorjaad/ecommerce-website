import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const handleAddProduct = (product) => dispatch(addCart(product));

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await response.json();
      setProduct(data);
      setLoading(false);
    };
    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    if (product) {
      dispatch(addItem(product, quantity));
    }
  };

  if (loading) {
    return <Skeleton height={400} width={300} />;
  }

  return (
    <div className="container my-5 py-5">
      <div className="row py-5">
        <div className="col-md-6">
          <img
            src={product.image}
            alt={product.title}
            style={{ width: "100%", height: "auto", objectFit: "contain" }}
          />
        </div>
        <div className="col-md-6">
          <h1 className="display-5">{product.title}</h1>
          <p className="lead fw-bolder">
            Rating {product.rating && product.rating.rate}{" "}
            <i className="fa fa-star"></i>
          </p>
          <h3 className="display-6 fw-bold my-4">${product.price}</h3>
          <p className="lead">{product.description}</p>

          {/* Add to Cart Button */}
          <button
            className="btn btn-outline-dark px-4 py-2 me-3"
            onClick={() => handleAddProduct(product)}
          >
            Add to Cart
          </button>
          <NavLink to="/CartPage">
            <button className="btn btn-dark px-4 py-2">Go to Cart</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
