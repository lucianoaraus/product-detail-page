import React from "react";
import ProductPreview from "./ProductPreview";
import ProductDetail from "./ProductDetail";

const MainContainer = () => {
  return(
    <div className='MainContainer'>
      <ProductPreview/> 
      <ProductDetail/>
    </div>
  )
}

export default MainContainer;