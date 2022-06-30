import React, { Children } from "react";
import { Link } from "react-router-dom";

const Navbar = ({ children }) => {
  const menuItems = (
    <>
      <li>
        <Link to="/" className="rounded">
          Home
        </Link>
      </li>
      <li>
        <Link to="completed" className="rounded">
          Completed Tasks
        </Link>
      </li>
      <li>
        <Link to="todo" className="rounded">
          To Do
        </Link>
      </li>
      <li>
        <Link to="calender" className="rounded">
          Calender
        </Link>
      </li>
    </>
  );
  return (
    <div className="container">
      <div className="drawer">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* <!-- Navbar --> */}
          <div className="w-full navbar p-0">
            <div className="flex-1">Navbar Title</div>
            <div className="flex-none lg:hidden navbar-end">
              <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-6 h-6 stroke-current"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </label>
            </div>
            <div className="flex-none hidden lg:block">
              <ul className="menu menu-horizontal">
                {/* <!-- Navbar menu content here --> */}
                {menuItems}
              </ul>
            </div>
          </div>
          {/* <!-- Page content here --> */}
          {children}
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
          <ul className="menu p-4 overflow-y-auto w-48 bg-base-100">
            {/* <!-- Sidebar content here --> */}
            {menuItems}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
