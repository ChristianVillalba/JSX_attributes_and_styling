import React from "react";
import ReactDOM from "react-dom";

// img that will be inserted as JS Attribute
const myImg = "https://picsum.photos/200";

ReactDOM.render(
  <div>
    {/* Styling: targeted in CSS using JS property classNAme*/}
    {/* Styling: class (as vanilla HTML) could work but may produce Errors*/}
    <h1 className="heading">My Favourite Foods</h1>

    <div>
      <p></p>
      <img
        className="squareimg"
        src="https://www.chelseasmessyapron.com/wp-content/uploads/2014/04/FRUIT-SALAD-3.jpg"
        alt="Fruit Salad"
      />
      <img
        className="squareimg"
        src="https://www.sapporo.co.uk/wp-content/uploads/2019/03/tasty-sushi-wallpaper.jpg"
        alt="Sushi"
      />
      <img
        className="squareimg"
        src="https://theviewfromgreatisland.com/wp-content/uploads/2019/03/Salmon-Cobb-Salad-8502281-March-05-2019.jpg"
        alt="Salad"
      />
    </div>

    {/* Styled: targeted in CSS as Regular HTML Element */}
    <ul>
      <li>Fruit Salad</li>
      <li>Sushi</li>
      <li>Salad</li>
    </ul>

    <p>JavaScript as Attribute</p>
    <dir>
      <img src={myImg} alt="" />
    </dir>
  </div>,
  document.getElementById("root")
);
