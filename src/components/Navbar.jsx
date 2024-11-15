import React from "react";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate hook
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/action/authAction";

function Navbar() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const state = useSelector((state) => state.handleCart);
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Use navigate hook

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login"); // Redirect to login page after logout
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img src="/logo.svg" alt="Logo" width="150" height="90"></img>
        </Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/products">
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/CartPage">
                Cart({state.length})
              </Link>
            </li>
            {isLoggedIn ? (
              <>
                <li className="nav-item">
                  <span className="nav-link">Welcome, User</span>
                </li>
                <li className="nav-item">
                  <button
                    onClick={handleLogout}
                    className="btn btn-link nav-link"
                  >
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
