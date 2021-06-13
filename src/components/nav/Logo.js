import React from 'react';

function Logo(props) {
    return (
        <div className="absolute left-1/2">
            <h1 className="relative -left-1/2 text-2xl md:text-4xl text-black md:text-white" style={{fontFamily: 'Alex Brush'}} id="logo">Kolpona Island</h1>
        </div>
    );
}

export default Logo;