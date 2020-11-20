import React, { Component } from "react";
import Images from "../img/logo-mini.png";
import Image from "../img/logo.png";
import FilterImage from "../img/filter.png";
import LeftCard from "./LeftCard";

class MobileHeader extends Component {
  

  render(props) {
    return (
      <div>
        <div className="row col-12 m-0 p-0 top ">
          <div className="col pt-2 pl-3">
            <div className="input-group">
              <div className="input-group mb-2">
                <img src={Images} width="60px" alt="headlogo"></img>
                <span className="pr-3"></span>
                <input
                  type="text"
                  className="form-control py-1"
                  placeholder="ค้นหา ชื่อ ร้านอาหาร และเครื่องดื่ม ร้านธงฟ้า ร้านค้า OTOP และสินค้าทั่วไป"
                />
                <div className="input-group-append">
                  <button
                    className="btn btn-outline-secondary buttonsearch px-4"
                    type="button"
                    id="button-addon2"
                  >
                    <i class="fa fa-search" aria-hidden="true"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-1 p-0 m-0">
            <img
              src={FilterImage}
              className="pt-3"
            
            ></img>
          </div>
          <div className="row col-12 m-0 p-0 title">
            <div className="py-2">
              <span className="topichead pl-3">หน้าแรก / ค้นหา</span>
            </div>
            <div className="col-2 p-0 m-0"></div>
          </div>
        </div>
      </div>
    );
  }
}

class Header extends Component {
  render(props) {
    return (
      <div>
        <MobileHeader></MobileHeader>

        <div className="row col-12 m-0 p-0 headerdesktop">
          <div className="col-2 p-0 m-0"></div>
          <div className="col-8 py-3">
            <div class="input-group">
              <img src={Image} width="150px" alt="headlogo"></img>
              <div className="input-group-prepend pl-4">
                <button
                  className="btn btn-outline-secondary dropdown-toggle"
                  type="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i className="fa fa-map-marker pr-2" aria-hidden="true"></i>
                  พื้นที่ใกล้ฉัน
                  <span className="pl-5"></span>
                </button>
              </div>
              <input
                type="text"
                className="form-control py-1"
                placeholder="ค้นหา ชื่อ ร้านอาหาร และเครื่องดื่ม ร้านธงฟ้า ร้านค้า OTOP และสินค้าทั่วไป"
              />
              <div class="input-group-append">
                <button
                  className="btn btn-outline-secondary buttonsearch px-4"
                  type="button"
                  id="button-addon2"
                >
                  <i class="fa fa-search" aria-hidden="true"></i>
                </button>
              </div>
            </div>
          </div>

          <div className="col-2"></div>
          <div className="row col-12 m-0 p-0 title">
            <div className="col-2"></div>
            <div className="py-2">
              <span className="topichead pl-3">หน้าแรก / ค้นหา</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
