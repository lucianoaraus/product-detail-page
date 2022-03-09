import React, {useState} from "react";

const ProductPreview = () => {

  const [currentPreviewImage, setCurrentPreviewImage] = useState('https://m.media-amazon.com/images/I/610q610KVfL._AC_SX569_.jpg')
  
  console.log(currentPreviewImage);

  return(
    <div className='ProductPreview'>
      <img className="WatchImage" src={currentPreviewImage} alt='Product Preview'/>
    </div>
  )
}

export default ProductPreview;