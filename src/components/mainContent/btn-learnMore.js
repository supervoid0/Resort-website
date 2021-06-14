import React from 'react';

function BtnLearnMore(props) {
    return (
        <button
            style={{fontFamily:'Roboto'}}
            className="border border-green-500 shadow-sm font-medium text-green-600 tracking-widest px-5 py-2 focus:outline-none hover:bg-green-500 hover:text-white"
        >
            LEARN MORE
        </button>
    );
}

export default BtnLearnMore;