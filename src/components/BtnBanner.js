import React from 'react';

function BtnBanner({BtnData}) {
    return (
        <button style={{fontFamily:'Open Sans'}} 
            className="px-8 md:px-10 mb-5 py-2 ring-2 ring-white text-white text-sm md:text-base mx-6 focus:outline-none
            transform hover:scale-105 transition duration-300 bg-blue-500 bg-opacity-10 hover:bg-opacity-30 tracking-wide">
            {BtnData.btnTitle}
        </button>
    );
}

export default BtnBanner;