import React from 'react';
import Banner from '../../components/banner/banner';
import MainContent from '../../components/mainContent';
import { BannerInfo, ContentInfo } from './data';

function EntertainmentPage(props) {
  return (
    <div>
      <Banner BannerInfo={BannerInfo} />
      <MainContent contentInfo={ContentInfo} />
    </div>
  );
}

export default EntertainmentPage;
