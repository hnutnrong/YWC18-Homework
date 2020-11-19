import React, { Component } from "react";
import "../App.css";
import Images from "../img/shop1.png";

class Body extends Component {
  render(props) {
    return (
      <div>
        <div className="row col-12  p-0 m-0 cardbody mt-2">
          <div className="col-sm-6 col-md-2 px-1 py-1 p-0 m-0">
            <center>
              <div
                style={{ backgroundImage: `url(${this.props.picshop})` }}
                className="shoppic"
              ></div>
            </center>
          </div>

          <div className="col-sm-6 col-md-10 pt-2 pl-5 p-0 m-0">
            <div>
              <span className="shopname pr-3">{this.props.shopname}</span>
              <span className=" px-2">{this.props.status}</span>
            </div>
            <div className="pt-2 explainshop">
              {this.props.shoptype}
              <span className="pl-3">|</span>
              <span className="pl-3">{this.props.levelprice}</span>
              <span className="ratelevel">{this.props.ratelevel}</span>
              <span className="pl-3">|</span>
              <span className="pl-3">{this.props.province}</span>
              <span className="pl-3">{this.props.city}</span>
              <div className="underline"></div>
              <div className="highlight">{this.props.describe}</div>

              <div className="py-2">
                {" "}
                <span className="recommend">เมนูแนะนำ: </span>
                {this.props.recommend}
              </div>
              <div className=" pt-3">
                {this.props.facilities.map((facilitie) => {
                  return (
                    <div className="facilities">
                      {/* <img
                        src=""
                        className="facilitiescircle"
                        width="20px"
                      ></img> */}
                      {facilitie}
                      
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Body;
