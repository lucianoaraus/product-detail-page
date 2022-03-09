import React, {useState}from "react";

const ColorContainer = () => {
  const [color, setColor] = useState(true);

  return(
    <div className='ColorContainer'>
      <h2 className='SubTittle'>Select Color</h2>
      <div className='ColorOptions'>
        <button /* onClick -> Border Style On + Change Watch Preview */ type="button" className="ImageButton">
          <img className="ColorButton" src='https://m.media-amazon.com/images/I/610q610KVfL._AC_SX569_.jpg' alt='Black Swatch'/>
        </button>
        <button /* onClick -> Border Style On + Change Watch Preview */ type="button" className="ImageButton">
          <img className="ColorButton" src='https://m.media-amazon.com/images/I/71jiGaztijL._AC_SX569_.jpg' alt='Purple Swatch'/>
          </button>
        <button /* onClick -> Border Style On + Change Watch Preview */ type="button" className="ImageButton">
          <img className="ColorButton" src='https://m.media-amazon.com/images/I/61L5Jko2QqL._AC_SX569_.jpg' alt='Pink Swatch'/>
          </button>
        <button /* onClick -> Border Style On + Change Watch Preview */ type="button" className="ImageButton">
          <img className="ColorButton" src='https://m.media-amazon.com/images/I/61tH7Ln5xJL._AC_SX569_.jpg' alt='Gray Swatch'/>
          </button>
      </div>
    </div>
  )
}

export default ColorContainer;