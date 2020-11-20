import React, { Component } from "react";
import "../App.css";
import Images from "../img/shop1.png";
import CarImage from "../img/car.png";
import PetImage from "../img/pet.png";
import BookImage from "../img/booking.png";

class Body extends Component {
  render(props) {
    return (
      <div>
        <div className="row col-12  p-0 m-0 cardbody mt-2">
          <div className="col-sm-6 col-md-2 p-0 m-0">
            <center>
              <div
                style={{ backgroundImage: `url(${this.props.picshop})` }}
                className="shoppic"
              ></div>
            </center>
          </div>

          <div className="col-sm-6 col-md-10 pt-3 pl-3 p-0 m-0 pb-1">
            
              <span className="shopname pr-3">{this.props.shopname}</span>
              <span className=" px-1 ">
                {this.props.status == "Y" ? (
                  <span className="status px-1">เปิดอยู่</span>
                ) : (
                  <span></span>
                )}

                {this.props.status == "N" ? (
                  <span className="statusclose px-1">ปิดแล้ว</span>
                ) : (
                  <span></span>
                )}
              </span>
         
            <div className="pt-2 explainshop">
              {this.props.shoptype}
              <span className="pl-2">|</span>

              <span className="pl-2">
                {this.props.levelprice == "1" ? (
                  <text className="blackprice">
                    ฿<text className="greyprice">฿฿฿</text>
                  </text>
                ) : (
                  <span></span>
                )}
                {this.props.levelprice == "2" ? (
                  <text className="blackprice">
                    ฿฿<text className="greyprice">฿฿</text>
                  </text>
                ) : (
                  <span></span>
                )}

                {this.props.levelprice == "3" ? (
                  <text className="blackprice">
                    ฿฿฿<text className="greyprice">฿</text>
                  </text>
                ) : (
                  <span></span>
                )}

                {this.props.levelprice == "4" ? (
                  <text className="blackprice">฿฿฿฿</text>
                ) : (
                  <span></span>
                )}
              </span>

              <span className="pl-2">|</span>
              <span className="pl-2">{this.props.province}</span>
              <span className="pl-2">{this.props.city}</span>
              <div className="underline"></div>
              <div className="highlight">{this.props.describe}</div>

              <div className="py-3">
                {" "}
                <span className="recommend">เมนูแนะนำ: </span>
                {this.props.recommend}
              </div>
              <div className="displayflex">
                {this.props.facilities.map((facilitie) => {
                  return (
                    <div className="facilities">
                      {facilitie == "ที่จอดรถ" ? (
                        <img
                          src={CarImage}
                          className="facilitiescircle"
                          width="18px"
                        ></img>
                      ) : (
                        <div></div>
                      )}
                      {facilitie == "สามารถนำสัตว์เลี้ยงเข้าได้" ? (
                        <img
                          src={PetImage}
                          className="facilitiescircle"
                          width="18px"
                        ></img>
                      ) : (
                        <div></div>
                      )}
                      {facilitie == "รับจองล่วงหน้า" ? (
                        <img
                          src={BookImage}
                          className="facilitiescircle"
                          width="18px"
                        ></img>
                      ) : (
                        <div></div>
                      )}

                      {/* {facilitie} */}
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
