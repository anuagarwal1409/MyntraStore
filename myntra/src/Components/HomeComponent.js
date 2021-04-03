import React from "react";
import CrouselView from './Crousel/Crousel';
import DealCardViewPort from './DealCardViewPort/DealCardViewPort';
import BrandInFocusViewPort from './BrandInFocusViewPort/BrandInFocusViewPort';

function HomeComponent(){
    return(
        <div>
            <CrouselView/>
          <DealCardViewPort/>

          <h2>BRANDS IN FOCUS</h2>
          <p>Show some brand love</p>
          

        <BrandInFocusViewPort/>
        </div>
    );
}

export default HomeComponent;