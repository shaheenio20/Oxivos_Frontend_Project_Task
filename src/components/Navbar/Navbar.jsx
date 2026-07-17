import { Link, useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();
  const handleSearch = (e) => {
    const searchItem = e.target.value.toLowerCase();
    if(searchItem){
      navigate(`/products?search=${searchItem}`)
    }
    else{
      navigate(`/products`)
    }
  }
  const navItems = (
    <>
      <li className="font-semibold text-base-content hover:text-primary transition-colors">
        <Link to="/">Home</Link>
      </li>
      <li className="font-semibold text-base-content hover:text-primary transition-colors">
        <Link to="/products">Products</Link>
      </li>
    </>
  );

  return (
    <div className="bg-base-100 shadow-sm sticky top-0 z-50">
      <div className="navbar w-11/12 mx-auto py-3">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow-lg"
            >
              {navItems}
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost hover:bg-transparent">
            <span className="lg:text-xl text-sm font-bold tracking-tight mr-3">
              Fashion<span className="text-primary">Store</span>
            </span>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-2">{navItems}</ul>
        </div>
        <div className="navbar-end gap-4 lg:ml-0 ml-6">
          <div className="form-control mr-3 w-1/2">
            <input
              onChange={handleSearch}
              type="text"
              name="search"
              placeholder="Search"
              className="input input-bordered"
            />
          </div>
          <Link
            to="/products"
            className="btn btn-primary shadow-md  sm:flex hover:scale-[1.02] transition-transform mr-1 lg:mr-0"
          >
            See More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
