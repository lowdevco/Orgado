import React from "react";
import "../../css/cart-css/cart.css";
import { useCart } from "../../../context/CartContext";

function CartSection() {
  const { cart, removeFromCart, updateQuantity } = useCart();

  const cartTotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  const handleDecrease = (item) => {
    if (item.quantity <= 1) {
      removeFromCart(item.id);
    } else {
      updateQuantity(item.id, -1);
    }
  };

  if (cart.length === 0) {
    return (
      <div
        className="container my-5 d-flex justify-content-center align-items-center flex-column"
        style={{ minHeight: "68vh" }}
      >
        <h2 className="text-muted mb-4">Your Cart is Empty</h2>
        <a
          href="/shop"
          className="btn px-4 py-2 text-white"
          style={{ backgroundColor: "#699c47", border: "none" }}
        >
          Go Back to Shop
        </a>
      </div>
    );
  }

  return (
    <div className="container my-4 my-md-5 cart-container">
      <h3 className="mb-4">Your Shopping Cart</h3>

      <div className="row">
        <div className="col-lg-8">
          {cart.map((item) => (
            <div className="card mb-3 border shadow-sm" key={item.id}>
              <div className="card-body p-3 p-md-4">
                <div className="d-flex gap-3">
                  <div className="flex-shrink-0">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="rounded border"
                      style={{
                        width: "75px",
                        height: "75px",
                        objectFit: "cover",
                      }}
                    />
                  </div>

                  <div className="flex-grow-1 d-flex flex-column justify-content-between">
                    <div className="d-flex justify-content-between align-items-start mb-2">
                      <h5
                        className="mb-0 text-break pe-2"
                        style={{ fontSize: "1.05rem" }}
                      >
                        {item.name}
                      </h5>
                      <button
                        className="btn btn-outline-danger btn-sm flex-shrink-0 px-2 py-1"
                        onClick={() => removeFromCart(item.id)}
                        title="Remove item"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          fill="currentColor"
                          className="bi bi-trash"
                          viewBox="0 0 16 16"
                        >
                          <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
                          <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
                        </svg>
                      </button>
                    </div>

                    <div className="d-flex flex-wrap justify-content-between align-items-center gap-2 mt-auto">
                      <span className="text-muted small mb-0 fw-medium">
                        Price: ${item.price}
                      </span>

                      {/* Quantity Controls */}
                      <div className="d-flex align-items-center bg-light rounded border px-1 py-1">
                        <button
                          className="btn btn-sm btn-light rounded-circle d-flex align-items-center justify-content-center border-0 shadow-none"
                          style={{ width: "26px", height: "26px" }}
                          onClick={() => handleDecrease(item)}
                        >
                          -
                        </button>
                        <span
                          className="fw-bold px-2 text-center"
                          style={{ minWidth: "32px", fontSize: "0.9rem" }}
                        >
                          {item.quantity}
                        </span>
                        <button
                          className="btn btn-sm btn-light rounded-circle d-flex align-items-center justify-content-center border-0 shadow-none"
                          style={{ width: "26px", height: "26px" }}
                          onClick={() => updateQuantity(item.id, 1)}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="col-lg-4 mt-4 mt-lg-0">
          <div className="card border shadow-sm bg-light">
            <div className="card-body p-4">
              <h5 className="card-title mb-4">Order Summary</h5>

              <div className="mb-3">
                {cart.map((item) => (
                  <div
                    key={`summary-${item.id}`}
                    className="d-flex justify-content-between align-items-center mb-2 small"
                  >
                    <span
                      className="text-muted text-truncate me-2"
                      style={{ maxWidth: "70%" }}
                    >
                      {item.name}{" "}
                      <span className="fw-bold text-dark ms-1">
                        x {item.quantity}
                      </span>
                    </span>
                    <span className="text-dark">
                      ${(item.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                ))}
              </div>

              <hr className="text-muted opacity-50" />

              <div className="d-flex justify-content-between mb-2">
                <span className="text-muted">Total Items:</span>
                <span className="fw-bold">{totalItems}</span>
              </div>

              <div className="d-flex justify-content-between mb-4">
                <span className="fw-bold">Total Price:</span>
                <span className="fw-bold fs-5" style={{ color: "#699c47" }}>
                  ${cartTotal.toFixed(2)}
                </span>
              </div>

              <button
                className="btn w-100 py-2 fw-bold shadow-sm text-white"
                style={{ backgroundColor: "#699c47", border: "none" }}
              >
                Proceed to Checkout
              </button>

              <div className="text-center mt-3">
                <a
                  href="/shop"
                  className="text-decoration-none text-muted small"
                >
                  ← Continue Shopping
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartSection;
