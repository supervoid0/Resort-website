import React from 'react';
import BtnBanner from './BtnBanner';

const defaultValue = {
    title: "KOLPONA ISLAND",
    subtitle: "Feel the adventure with Luxury Hotel Resort",
    banner: "url(/assets/img/background.jpg)"
}

function Banner({title = defaultValue.title , subtitle = defaultValue.subtitle, bannerImage = defaultValue.banner, ButtonData = []}) {
    return (
        <div className="w-full h-screen bg-center bg-cover" style={{ backgroundImage: `${bannerImage}` }}>
            <div className="w-full h-full flex flex-col justify-center items-center bg-black bg-opacity-40">
                <div className="mb-6 sm:mb-10">
                    <p className="text-6xl sm:text-7xl md:text-8xl text-white tracking-wide text-center leading-snug" style={{fontFamily:'Oswald'}}>{title}</p>
                </div>

                <div className="mb-10 sm:mb-16">
                    <span className="text-base md:text-2xl text-white" style={{fontFamily:'Open Sans'}}>{subtitle}</span>
                </div>

                <div className="flex flex-col sm:flex-row">
                    {ButtonData.map((each)=><BtnBanner BtnData={each}/>)}
                </div>
            </div>
        </div>
    );
}

export default Banner;