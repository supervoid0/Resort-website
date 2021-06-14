import React from 'react';
import Catalog from './catalog'

function MainContent({content}) {
    return (
        content? content.map((each)=><Catalog catalogData={each}/>): null
    );
}

export default MainContent;