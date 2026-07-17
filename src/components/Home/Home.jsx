import { Link } from "react-router-dom";
import heroImage2 from "../../assets/images/Frame 5.png";
import products from "../../dummyData";
const Home = () => {
  const featuredProducts = products
    .filter((product) => product.featured)
    .slice(0, 4);
  return (
    <div className="bg-base-100 min-h-screen">
      <div>
        {/* Hero Section */}
        <div
          className="hero min-h-[600px] lg:min-h-[700px] mb-20 relative overflow-hidden"
          style={{
            backgroundImage: `url(${heroImage2})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="hero-overlay bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
          <div className="hero-content text-neutral-content flex-col lg:flex-row w-full justify-start pl-8 lg:pl-24 relative z-10">
            <div className="max-w-2xl text-left animate-fade-in-up">
              <span className="badge badge-primary badge-lg mb-6 font-semibold shadow-lg">
                New Arrival 2025
              </span>
              <h1 className="mb-6 text-5xl lg:text-7xl font-extrabold leading-tight tracking-tight">
                Elevate Your <br />
                <span className="text-primary">Everyday Style</span>
              </h1>
              <p className="mb-10 text-lg lg:text-xl font-medium text-gray-200 leading-relaxed max-w-xl">
                Discover our latest collection curated for the modern
                trendsetter. Uncompromising quality meets exceptional design.
              </p>
              <Link
                to="/products"
                className="btn btn-primary btn-lg shadow-xl shadow-primary/30 hover:scale-105 transition-all duration-300"
              >
                Shop Collection Now
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="w-11/12 mx-auto mb-20">
        <div className="w-3/5 mx-auto mb-8 text-center">
          <h2 className="text-3xl font-bold mb-3">
            Featured Products
          </h2>
          <p>
            Explore our featured products, carefully selected to offer the
            perfect blend of quality, value, and performance.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product) => (
            <div
              key={product.id}
              className="card bg-base-100 shadow-md hover:shadow-lg transition-shadow duration-300"
            >
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
                  <Link
                    to={`/products/${product.id}`}
                    className="btn btn-primary btn-sm"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-16">
          <Link
            to="/products"
            className="btn btn-outline btn-lg font-bold border-2 hover:bg-base-content hover:text-base-100 px-10"
          >
            View All Products
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
