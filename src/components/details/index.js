import React from 'react';
import Banner from "../banner/banner";
import DetailDescription from "./detailDescription";
import DetailGallery from "./detailGallery";

function DetailPage({D}) {
    return (
        <div>
            <Banner/>
            <DetailDescription/>
            <DetailGallery/>
        </div>
    );
}

export default DetailPage;