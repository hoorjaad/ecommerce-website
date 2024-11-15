// src/components/Checkout.jsx
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Checkout() {
  const cart = useSelector((state) => state.handleCart);

  const [shippingInfo, setShippingInfo] = useState({
    name: "",
    address: "",
    city: "",
    postalCode: "",
    country: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setShippingInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const totalPrice = cart.reduce(
    (total, item) => total + item.qty * item.price,
    0
  );

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Checkout</h2>

      <div className="row">
        {/* Left Column: Order Summary */}
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">
              <h5>Order Summary</h5>
            </div>
            <div className="card-body">
              <ul className="list-group">
                {cart.map((item) => (
                  <li
                    className="list-group-item d-flex justify-content-between align-items-center"
                    key={item.id}
                  >
                    <div className="d-flex">
                      <img
                        src={item.image}
                        alt={item.name}
                        width="50"
                        height="50"
                        className="me-3"
                      />
                      <span>{item.name}</span>
                    </div>
                    <span>
                      ${item.price} x {item.qty}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="mt-3">
                <p className="fw-bold">Total: ${totalPrice.toFixed(2)}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Shipping Information */}
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">
              <h5>Shipping Information</h5>
            </div>
            <div className="card-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    value={shippingInfo.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="address" className="form-label">
                    Address
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="address"
                    name="address"
                    value={shippingInfo.address}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="city" className="form-label">
                    City
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="city"
                    name="city"
                    value={shippingInfo.city}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="postalCode" className="form-label">
                    Postal Code
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="postalCode"
                    name="postalCode"
                    value={shippingInfo.postalCode}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="country" className="form-label">
                    Country
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="country"
                    name="country"
                    value={shippingInfo.country}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Proceed to Payment Button */}
      <div className="mt-4 text-center">
        {cart.length > 0 &&
        shippingInfo.name &&
        shippingInfo.address &&
        shippingInfo.city &&
        shippingInfo.postalCode &&
        shippingInfo.country ? (
          <button className="btn btn-success btn-lg">Proceed to Payment</button>
        ) : (
          <p className="text-danger">
            Please fill in all shipping details to proceed.
          </p>
        )}
      </div>

      {/* Back to Cart Button */}
      <div className="text-center mt-3">
        <Link to="/CartPage">
          <button className="btn btn-outline-primary">Back to Cart</button>
        </Link>
      </div>
    </div>
  );
}

export default Checkout;
