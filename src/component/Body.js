import React, { Component } from "react";
import "../App.css";
import Images from "../img/shop1.png";

class Body extends Component {
  render(props) {
    return (
      <div>
        <div className="row col-12 p-0 m-0 cardbody">
          <div className="col-2">
            <img src={Images}></img>
          </div>

          <div className="col-2">
            
          </div>
        </div>
      </div>
    );
  }
}

export default Body;
