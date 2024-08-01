import { Menu, X } from "lucide-react";
import { useState } from "react";
import Coratext from "../assets/Coratext.png";
import { Link } from "react-scroll";
import { navItems } from "../constants";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative lg:text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <img className="h-10 w-full mr-2" src={Coratext} alt="Logo" />
          </div>
          <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.href}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  className="cursor-pointer"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="hidden lg:flex justify-center space-x-12 items-center">
            <Link
              to="https://app.coratext.com/login"
              smooth={true}
              duration={500}
              className="py-2 px-3 border rounded-md cursor-pointer"
            >
              Sign In
            </Link>
            <Link
              to="signup"
              smooth={true}
              duration={500}
              className="bg-gradient-to-r from-logo-color to-logo-darker py-2 px-3 rounded-md cursor-pointer"
            >
              Create an account
            </Link>
          </div>
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
            <ul>
              {navItems.map((item, index) => (
                <li key={index} className="py-4">
                  <Link
                    to={item.href}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    onClick={toggleNavbar}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex space-x-6">
              <Link
                to="signin"
                smooth={true}
                duration={500}
                className="py-2 px-3 border rounded-md"
              >
                Sign In
              </Link>
              <Link
                to="signup"
                smooth={true}
                duration={500}
                className="py-2 px-3 rounded-md bg-gradient-to-r from-logo-color to-logo-darker"
              >
                Create an account
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
