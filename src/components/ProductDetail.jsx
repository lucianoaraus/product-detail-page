import React from "react";
import TopText from './TopText';
import BuyContainer from './BuyContainer';
import ColorContainer from './ColorContainer';

const ProductDetail = () => {
  return (
    <div className='ProductDetail'>
      <TopText/>
      <ColorContainer/>
      <BuyContainer/>
    </div>
  )
}

export default ProductDetail ;