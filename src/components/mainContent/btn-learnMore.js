import React from 'react';
import { Link } from 'react-router-dom';

function BtnLearnMore({path}) {
    return (
        <Link to={`${path}`}>
            <button
                style={{fontFamily:'Roboto'}}
                className="border border-green-500 shadow-sm font-medium text-green-600 tracking-widest px-5 py-2 focus:outline-none hover:bg-green-500 hover:text-white"
            >
                LEARN MORE
            </button>
        </Link>
        
    );
}

export default BtnLearnMore;