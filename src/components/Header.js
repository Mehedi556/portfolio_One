import React from 'react';

const Header = () => {
    return (
      <div className="navbar md:w-11/12 lg:w-10/12 mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <li className='font-bold' style={{color:"#5C7F41"}}><a>About</a></li>
            <li className='font-bold' style={{color:"#5C7F41"}}><a>Experience</a></li>
            <li className='font-bold' style={{color:"#5C7F41"}}><a>Work</a></li>
            <li className='font-bold' style={{color:"#5C7F41"}}><a>Contact</a></li>
          </ul>
        </div>
        <a style={{color:"#5C7F41"}} className="font-bold text-2xl normal-case text-xl">A S MEHEDI</a>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
        <li className='font-bold' style={{color:"#5C7F41"}}><a>About</a></li>
            <li className='font-bold' style={{color:"#5C7F41"}}><a>Experience</a></li>
            <li className='font-bold' style={{color:"#5C7F41"}}><a>Work</a></li>
            <li className='font-bold' style={{color:"#5C7F41"}}><a>Contact</a></li>
        </ul>
      </div>
      
    </div>
    );
};

export default Header;