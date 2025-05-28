import React from 'react';
import Headroom from "react-headroom";
import { NavLink } from 'react-router';
import Sticky from "react-stickynode";
import "./Navbar.css"
const NavBar = () => {
    const links = <>
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'/jobs'}>Jobs</NavLink></li>
        <li><NavLink to={'/profile'}>Profile</NavLink></li>
        
    </>
    return (
      <div>
        <Headroom
          style={{ WebkitTransition: "all 0.3s ease-in-out" }}
          onPin={() => console.log("Pinned!")}
          onUnpin={() => console.log("Unpinned!")}
          onUnfix={() => console.log("Unfixed!")}
          upTolerance={0}
          downTolerance={0}
        >
          <div className="shadow">
            <div className="navbar w-11/12 mx-auto bg-base-100 ">
              <div className="navbar-start">
                <div className="dropdown">
                  <div
                    tabIndex={0}
                    role="button"
                    className="btn btn-ghost lg:hidden"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      {" "}
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h8m-8 6h16"
                      />{" "}
                    </svg>
                  </div>
                  <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
                  >
                    {links}
                  </ul>
                </div>
                <a className="btn btn-ghost text-xl">Get Your Job</a>
              </div>
              <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">{links}</ul>
              </div>
              <div className="navbar-end">
                <img
                  alt=""
                  className="w-12 h-12 rounded-full ring-2 ring-offset-4 dark:bg-gray-500 dark:ring-violet-600 dark:ring-offset-gray-100"
                  src="https://source.unsplash.com/40x40/?portrait?1"
                />
              </div>
            </div>
          </div>
        </Headroom>
      </div>
    );
};

export default NavBar;