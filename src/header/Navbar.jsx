import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const { user, logOutUser } = useContext(AuthContext);

  const navLinks = (
    <>
      <li className="text-lg font-medium">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="text-lg font-medium">
        <NavLink to="/addProduct">Add Product</NavLink>
      </li>
      <li className="text-lg font-medium">
        <NavLink to="/myCart">My Cart</NavLink>
      </li>
      <li className="text-lg font-medium">
        <NavLink to="/login">Login</NavLink>
      </li>
    </>
  );

  return (
    <nav className="container mx-auto">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown dropdown-start">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <div className="w-10 rounded-full">
                <img src="https://i.ibb.co/2hXPm1h/e6c16c6fdc213eae670cae97c487582ad720f85e-351x351.png" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 rounded-box w-52 lg:hidden"
            >
              {navLinks}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-sky-400 font-bold text-4xl pl-12 md:pl-0">
            King Of Tech
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu-horizontal px-1 gap-5">{navLinks}</ul>
        </div>

        <div className="navbar-end">
          {user?.email ? (
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src={user.photoURL} alt={user.displayName} />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <button className="btn btn-sm  btn-ghost">
                    {user.displayName}
                  </button>
                </li>
                <li>
                  <Link to="/">
                    <button
                      className="btn btn-sm  btn-ghost"
                      onClick={logOutUser}
                    >
                      Logout
                    </button>
                  </Link>
                </li>
              </ul>
            </div>
          ) : (
            <Link to="/login">
              <button className="btn btn-sm  btn-ghost">Login</button>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
