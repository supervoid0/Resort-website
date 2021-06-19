import React from 'react';
import Catalog from './catalog'

function MainContent({contentInfo}) {
    return (
        contentInfo? contentInfo.map((each)=><Catalog catalogData={each}/>): null
    );
}

export default MainContent;