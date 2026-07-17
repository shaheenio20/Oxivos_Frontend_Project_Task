import { useState } from "react";
import productData from "../../dummyData";
import { Link } from "react-router-dom";
const Product = () => {
  const [products] = useState(productData);
  return (
    <div className="bg-base-100 min-h-screen py-10">
      <div className="w-11/12 mx-auto">
        <div className="mb-12 text-center max-w-3xl mx-auto pt-10 lg:pt-0">
          <h1 className="text-5xl lg:text-6xl font-extrabold mb-4 tracking-tight text-base-content">
            Our <span className="text-primary">Collection</span>
          </h1>
          <p className="text-lg text-base-content/70 font-medium">
            Explore our curated selection of premium fashion items. Find the
            perfect fit to express your unique style.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="card bg-base-100 shadow-md hover:shadow-lg transition-shadow duration-300">
              <figure className="px-4 pt-4">
                <img
                    src={product.image}
                    alt={product.name}
                    className="rounded-lg w-full h-64 object-cover"
                />
                </figure>
                <div className="card-body">
                    <h3 className="card-title text-lg font-semibold">
                        {product.name}
                    </h3>
                    <p className="text-gray-600">${product.price}</p>
                    <div className="card-actions justify-end">
                        <Link to={`/products/${product.id}`}>
                            <button className="btn btn-primary btn-sm">
                                View Details
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
