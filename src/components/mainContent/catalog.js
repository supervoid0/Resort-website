import React from 'react';
import ImageCatalog from "./image-catalog";
import DescriptionCatalog from "./description-catalog";

function Catalog({catalogData}) {
    const {image, content} = catalogData
    return (
       <div className="flex flex-col lg:flex-row w-full xl:w-1280 mx-auto mt-20">
           <ImageCatalog image={image}/>
           <DescriptionCatalog content={content}/>
       </div>
    );
}

export default Catalog;