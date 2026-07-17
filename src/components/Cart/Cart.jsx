import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../contexts/CartContext.js";
import { RiDeleteBin6Line } from "react-icons/ri";

const Cart = () => {
  const {
    cart,
    removeFromCart,
    updateQuantity,
    clearCart,
    cartTotal,
    cartCount,
  } = useContext(CartContext);

  if (cartCount === 0) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center bg-base-100 px-4">
        <div className="text-center space-y-6 max-w-md w-full p-8 rounded-2xl bg-base-200/50">
          <div className="w-32 h-32 mx-auto bg-base-300 rounded-full flex items-center justify-center mb-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-16 w-16 text-base-content/30"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          </div>
          <h2 className="text-3xl font-extrabold text-base-content">
            Your cart is empty
          </h2>
          <p className="text-base-content/70">
            Looks like you haven't added anything to your cart yet. Discover our
            amazing products!
          </p>
          <Link
            to="/products"
            className="btn btn-primary btn-block btn-lg shadow-lg"
          >
            Start Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-base-100 min-h-screen py-10">
      <div className="w-11/12 lg:w-9/12 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-center mb-8 gap-4 border-b border-base-200 pb-6">
          <div className="pt-10 md:pt-0">
            <h1 className="text-4xl font-extrabold text-base-content tracking-tight">
              Shopping Cart
            </h1>
            <p className="text-base-content/70 mt-2 font-medium">
              You have {cartCount} items in your cart
            </p>
          </div>
          <button
            onClick={clearCart}
            className="btn btn-ghost btn-base text-error hover:bg-error/10 font-semibold"
          >
            <RiDeleteBin6Line />
            Clear Cart
          </button>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-2/3 space-y-4">
            {cart.map((item) => (
              <div
                key={item.id}
                className="card sm:card-side bg-base-100 border border-base-200 shadow-sm hover:shadow-md transition-shadow"
              >
                <figure className="sm:w-48 sm:h-48 shrink-0 bg-base-200 p-2">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover rounded-xl"
                  />
                </figure>
                <div className="card-body p-6 flex flex-col justify-between">
                  <div className="flex justify-between items-start gap-4">
                    <div>
                      <h2 className="card-title text-xl font-bold mb-1">
                        <Link
                          to={`/product/${item.id}`}
                          className="hover:text-primary transition-colors"
                        >
                          {item.name}
                        </Link>
                      </h2>
                      <p className="text-sm text-base-content/60 font-medium">
                        {item.category}
                      </p>
                    </div>
                    <p className="font-bold text-xl text-primary shrink-0">
                      ${item.price}
                    </p>
                  </div>

                  <div className="flex justify-between items-center mt-6">
                    <div className="join border border-base-300 rounded-lg">
                      <button
                        className="btn btn-ghost btn-sm join-item text-lg"
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                        disabled={item.quantity <= 1}
                      >
                        -
                      </button>
                      <div className="btn btn-ghost btn-sm join-item no-animation pointer-events-none w-12 font-bold bg-base-200/50">
                        {item.quantity}
                      </div>
                      <button
                        className="btn btn-ghost btn-sm join-item text-lg"
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                      >
                        +
                      </button>
                    </div>

                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="btn btn-square btn-ghost text-error hover:bg-error hover:text-white transition-colors text-lg"
                      title="Remove item"
                    >
                      <RiDeleteBin6Line />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="lg:w-1/3">
            <div className="card bg-base-200/50 border border-base-300 sticky top-24">
              <div className="card-body p-8">
                <h3 className="text-2xl font-bold mb-6 pb-4 border-b border-base-300">
                  Order Summary
                </h3>

                <div className="space-y-3 mb-6 font-medium text-base-content/80">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>${cartTotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span className="text-success font-semibold">Free</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tax</span>
                    <span>${(cartTotal * 0.05).toFixed(2)}</span>
                  </div>
                </div>

                <div className="border-t border-base-300 pt-6 mb-8 flex justify-between items-end">
                  <span className="text-xl font-bold">Total</span>
                  <span className="text-3xl font-extrabold text-primary">
                    ${(cartTotal * 1.05).toFixed(2)}
                  </span>
                </div>

                <Link to="/checkout">
                  <button className="btn btn-primary btn-block btn-lg shadow-lg hover:scale-[1.02] transition-transform">
                    Proceed to Checkout
                  </button>
                </Link>
                <div className="text-center mt-4">
                  <Link
                    to="/products"
                    className="text-sm font-medium hover:text-primary transition-colors underline-offset-4 hover:underline"
                  >
                    Continue Shopping
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
