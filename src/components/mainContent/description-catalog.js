import React from 'react';
import BtnLearnMore from "./btn-learnMore";

function DescriptionCatalog({description}) {
    const {title, details, buttonData} = description

    return (
        <div className="w-full xl:w-1/2 mt-10 xl:mt-0 flex items-center">
            <div className="px-10 xl:px-24 text-gray-700">
                <h1 className="text-5xl uppercase" style={{fontFamily:'Oswald'}}>
                    {title}
                </h1>

                <p className="text-lg my-10" style={{fontFamily:'Roboto'}}>
                    {details}
                </p>
                <BtnLearnMore buttonData={buttonData}/>
            </div>
        </div>
    );
}

export default DescriptionCatalog;

