import React from 'react';

function MobileNav() {
  return (
    <div className="fixed z-50 right-0 top-12 w-full sm:w-1/2 h-screen py-4 bg-white md:hidden">
      <ul className="flex flex-col text-center">
        <li className="my-6">Home</li>
        <li className="my-6">About Us</li>
        <li className="my-6">Contact</li>
        <li className="my-6">Privacy policy</li>
        <li className="my-6">Terms & Conditions</li>
      </ul>
    </div>
  );
}

export default MobileNav;
