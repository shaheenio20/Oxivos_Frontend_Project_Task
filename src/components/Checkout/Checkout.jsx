import { CiUser } from "react-icons/ci";
import { FaArrowRightLong } from "react-icons/fa6";
import Swal from "sweetalert2";
import CartContext from "../../contexts/CartContext";
import { useContext } from "react";

const Checkout = () => {
  const { cartTotal } = useContext(CartContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const address = form.address.value;
    const customerInfo = {
      name,
      email,
      phone,
      address,
    };
    console.log(customerInfo);
    Swal.fire({
      title: "Success!",
      icon: "success",
      text: "Your order has been placed successfully.",
      draggable: true,
    });
    form.reset();
  };
  return (
    <div className="bg-base-100 min-h-screen py-10">
      <div className="hero min-h-screen pt-8 lg:pt-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-11/12 mx-auto">
          <div className="card w-full shrink-0 shadow-2xl">
            <h1 className="lg:text-3xl text-2xl font-bold text-center my-5 text-primary">
              <CiUser className="inline-block mr-2 text-primary" />
              Customer Information
              <FaArrowRightLong className="inline-block ml-2 text-primary" />
            </h1>
            <form className="card-body" onSubmit={handleSubmit}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="name"
                  name="name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Phone</span>
                </label>
                <input
                  type="text"
                  name="phone"
                  placeholder="phone"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Address</span>
                </label>
                <input
                  type="text"
                  name="address"
                  placeholder="address"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control"></div>
              <div className="form-control mt-6">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="Submit"
                />
              </div>
            </form>
          </div>
          <div>
            <div className="">
              <div className="card bg-base-200/50 border border-base-300 sticky top-24">
                <div className="card-body p-8">
                  <h3 className="text-2xl font-bold mb-6 pb-4 border-b border-base-300 text-primary">
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
