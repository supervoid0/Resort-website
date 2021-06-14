import React from 'react';
import ImageCatalog from "./image-catalog";
import DescriptionCatalog from "./description-catalog";

function Catalog({catalogData}) {
    const {image, description} = catalogData
    return (
       <div className="flex flex-col lg:flex-row w-full xl:w-1280 mx-auto mt-20">
           <ImageCatalog image={image}/>
           <DescriptionCatalog description={description}/>
       </div>
    );
}

export default Catalog;