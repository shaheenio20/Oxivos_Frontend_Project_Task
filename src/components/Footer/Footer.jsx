import logo from "../../assets/images/fashion-logo.jpg";
const Footer = () => {
  return (
    <div>
      <div className="bg-neutral-200">
        <footer className="footer text-base-content p-10 w-10/12 mx-auto">
          <aside>
            <img src={logo} alt="logo" className="w-16 rounded-full"/>
            <p className="text-black font-semibold">
              Fashion<span className="text-primary">Store</span>  Industries Ltd.
            </p>
            <p>Providing reliable tech since 1992</p>
          </aside>
          <nav>
            <h6 className="footer-title">Services</h6>
            <a className="link link-hover">Branding</a>
            <a className="link link-hover">Design</a>
            <a className="link link-hover">Marketing</a>
            <a className="link link-hover">Advertisement</a>
          </nav>
          <nav>
            <h6 className="footer-title">Company</h6>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
          </nav>
          <nav>
            <h6 className="footer-title">Legal</h6>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </nav>
        </footer>
      </div>
      <div className="bg-neutral-100">
        <footer className="footer text-neutral-content items-center p-4 w-10/12 mx-auto">
          <aside className="lg:grid-flow-col items-center">
            <h6 className="text-xl font-bold text-blue-500">OXIVOS</h6>
            <p className="text-black">
              Copyright © {new Date().getFullYear()} - All right reserved
            </p>
          </aside>
          <nav className="lg:grid-flow-col gap-4 md:place-self-center md:justify-self-end">
            <a
              className="text-blue-500"
              href="https://www.oxivos.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Web: oxivos.com
            </a>
            <a className="text-blue-500" href="mailto:info@oxivos.com">
              Email: info@oxivos.com
            </a>
            <a className="text-blue-500" href="tel:+1234567890">
              Phone: 01688399676
            </a>
          </nav>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
