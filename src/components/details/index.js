import React from 'react';
import {useLocation} from 'react-router-dom'
import Banner from "../banner/banner";
import DetailDescription from "./detailDescription";
import DetailGallery from "./detailGallery";

function DetailPage() {

    const {state} = useLocation()
    const {content} = state

    return (
        <div>
            <Banner BannerInfo={content}/>
            <DetailDescription description = {content.details.paragraph}/>
            <DetailGallery galleryImage={content.details.galleryImages}/>
        </div>
    );
}

export default DetailPage;
