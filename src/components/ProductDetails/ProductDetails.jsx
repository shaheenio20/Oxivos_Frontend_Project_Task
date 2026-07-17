import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { CartContext } from "../../contexts/CartContext.js";
import productData from "../../dummyData";
import Swal from "sweetalert2";
const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);
  const product = productData.find((item) => item.id === parseInt(id));

  const handleAddToCart = () => {
    addToCart(product);
    Swal.fire({
      title: "Success!",
      text: "The cart has been added successfully.",
      icon: "success",
      confirmButtonText: "OK",
    });
    navigate("/cart");
  };

  return (
    <div className="bg-base-100 min-h-screen py-10">
      <div className="w-11/12 mx-auto">
        <div className="card lg:card-side bg-base-100 shadow-2xl overflow-hidden rounded-2xl pt-10 lg:pt-0">
          <figure className="lg:w-1/2 relative bg-base-200">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover max-h-[600px] hover:scale-105 transition-transform duration-500"
            />
            {product.inStock ? (
              <div className="absolute top-4 right-4 badge badge-success text-white font-semibold p-3 shadow-md">
                In Stock
              </div>
            ) : (
              <div className="absolute top-4 right-4 badge badge-error text-white font-semibold p-3 shadow-md">
                Out of Stock
              </div>
            )}
          </figure>

          <div className="card-body lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
            <div className="badge badge-primary badge-outline mb-2">
              {product.category}
            </div>
            <h1 className="text-4xl lg:text-5xl font-extrabold text-base-content mb-4 tracking-tight leading-tight">
              {product.name}
            </h1>

            <div className="flex items-center gap-4 mb-6">
              <span className="text-3xl font-bold text-primary">
                ${product.price}
              </span>
              <div className="flex items-center bg-base-200 px-3 py-1 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-warning"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="ml-1 font-semibold">{product.rating}</span>
              </div>
            </div>

            <p className="text-lg text-base-content/80 mb-8 leading-relaxed">
              {product.description}
            </p>

            <div className="grid grid-cols-2 gap-6 mb-8">
              <div>
                <h3 className="font-semibold text-base-content/70 uppercase text-sm mb-3 text-center">
                  Available Colors
                </h3>
                <div className="lg:flex-row flex-col gap-2 space-x-2 space-y-2 text-center">
                  {product.colors?.map((color, idx) => (
                    <div
                      key={idx}
                      className="badge badge-lg badge-outline py-3 px-4 font-medium"
                    >
                      {color}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-base-content/70 uppercase text-sm mb-3 text-center">
                  Sizes
                </h3>
                <div className="lg:flex-row flex-col gap-2 space-x-2 space-y-2 text-center">
                  {product.sizes?.map((size, idx) => (
                    <div
                      key={idx}
                      className="badge badge-lg py-3 px-4 bg-base-200 border-none font-medium hover:bg-base-300 transition-colors cursor-pointer"
                    >
                      {size}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="card-actions mt-auto pt-6 border-t border-base-200">
              <button
                className="btn btn-primary btn-lg flex-1 shadow-lg shadow-primary/30 hover:scale-[1.02] transition-transform"
                onClick={handleAddToCart}
                disabled={!product.inStock}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                {product.inStock ? "Add to Cart" : "Out of Stock"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
