import React from 'react';
import Banner from "../../components/Banner";

function Home(props) {

    const BannerInfo = {
        title:"KOLPONA ISLAND",  
        subtitle: "Feel the adventure with Luxury Hotel Resort", 
        bannerImage: "url(/assets/img/background.jpg)",
        ButtonData: [
            {
                btnTitle: "ACCOMODATION"
            },
            {
                btnTitle: "ENTERTAINMENTS"
            }
        ]
    }

    return (
        <div>
            <Banner title = {BannerInfo.title} subtitle = {BannerInfo.subtitle} bannerImage = {BannerInfo.bannerImage} ButtonData = {BannerInfo.ButtonData} />
        </div>
    );
}

export default Home;