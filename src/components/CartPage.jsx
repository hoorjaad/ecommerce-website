import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { delCart, addCart } from "../redux/action/index"; // Assuming you have a delCart action
// Action to remove an item from the cart/ Action to remove item and update quantity

function CartPage() {
  // Access the cart items from the Redux store
  const cartItems = useSelector((state) => state.handleCart);
  const dispatch = useDispatch();

  // Calculate the total price of the items in the cart
  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.qty * item.price,
    0
  );

  // Handle removing an item from the cart
  const handleRemove = (item) => {
    dispatch(delCart(item)); // Dispatch the action to remove the item
  };

  // Handle quantity update
  const handleQuantityChange = (item, quantity) => {
    if (quantity > 0) {
      dispatch(addCart(item, quantity)); // Dispatch action to update quantity
    }
  };

  return (
    <div className="container mt-5">
      <h2>Your Cart</h2>

      {/* Check if the cart is empty */}
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          <ul className="list-group">
            {/* Map through each item in the cart */}
            {cartItems.map((item) => (
              <li
                key={item.id}
                className="list-group-item d-flex justify-content-between align-items-center"
              >
                <div className="d-flex">
                  {/* Display the product image */}
                  <img
                    src={item.image} // Assuming the item has a property 'imageUrl'
                    alt={item.name}
                    width="80"
                    height="80"
                    className="me-3"
                  />

                  <div>
                    <h5>{item.name}</h5>
                    <p>Price: ${item.price}</p>

                    {/* Quantity Counter */}
                    <div className="d-flex align-items-center">
                      <button
                        className="btn btn-outline-secondary me-2"
                        onClick={() => handleQuantityChange(item, item.qty - 1)}
                      >
                        -
                      </button>
                      <span>{item.qty}</span>
                      <button
                        className="btn btn-outline-secondary ms-2"
                        onClick={() => handleQuantityChange(item, item.qty + 1)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>

                <div>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleRemove(item)} // Remove item from cart
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>

          {/* Display the total price */}
          <div className="mt-4">
            <h4>Total: ${totalPrice.toFixed(2)}</h4>
          </div>

          {/* Link to the checkout page */}
          <div className="mt-3">
            <Link to="/checkout" className="btn btn-primary">
              Proceed to Checkout
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default CartPage;
