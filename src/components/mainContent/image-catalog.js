import React from 'react';

function ImageCatalog({image}) {
    const {source, isImagePositionLeft} = image

    return (
        <div className={`w-full xl:w-1/2 ${isImagePositionLeft? "lg:order-first": "lg:order-last"}`}>
            <img
                className="w-full h-500 lg:h-600 object-cover bg-center"
                src={source}
                alt="catalogImage"
            />
        </div>
    );
}

export default ImageCatalog;