import React from 'react';
import BtnBanner from './btnBanner';
import defaultBg from '../../assets/img/Background.jpg';

const defaultValue = {
  title: 'KOLPONA ISLAND',
  subtitle: '',
  banner: defaultBg,
};

function Banner({ BannerInfo }) {
  const {
    title = defaultValue.title,
    subtitle = defaultValue.subtitle,
    bannerImage = defaultValue.banner,
    ButtonData = [],
  } = BannerInfo;

  return (
    <div
      className="w-full h-screen bg-center bg-cover"
      style={{ backgroundImage: `url(${bannerImage})` }}
    >
      <div className="w-full h-full flex flex-col justify-center items-center bg-black bg-opacity-30">
        <div className="mb-6 sm:mb-10">
          <h1
            className="text-6xl sm:text-7xl md:text-8xl text-white tracking-wide text-center leading-snug"
            style={{ fontFamily: 'Oswald' }}
          >
            {title}
          </h1>
        </div>

        <div className="mb-10 sm:mb-16">
          <span
            className="text-base md:text-2xl text-white text-center"
            style={{ fontFamily: 'Open Sans' }}
          >
            {subtitle}
          </span>
        </div>

        <div className="flex flex-col sm:flex-row">
          {ButtonData
            ? ButtonData.map((each) => <BtnBanner BtnData={each} />)
            : null}
        </div>
      </div>
    </div>
  );
}

export default Banner;
