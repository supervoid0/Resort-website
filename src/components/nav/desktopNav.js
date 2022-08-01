import React from 'react';

function DesktopNav() {
  return (
    <ul
      className="flex items-center hidden md:flex text-white text-base tracking-widest"
      style={{ fontFamily: 'Open Sans' }}
      id="navItem"
    >
      <li className="mx-6 hidden lg:block">OFFERS</li>
      <li className="mx-6">CALL US</li>
      <li className="mx-6">
        <button className="px-5 py-2 rounded-md bg-white text-black shadow-md">
          BOOK NOW
        </button>
      </li>
    </ul>
  );
}

export default DesktopNav;
