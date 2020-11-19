import React, { Component, isValidElement } from "react";
import "./App.css";
import Image from "./img/logo.png";
import CarImage from "./img/car.png";
import Filter from "./component/Filter";
import Body from "./component/Body";
import Province from "./component/Province";
import Price from "./component/Price";
import LeftCard from "./component/LeftCard";
import Header from "./component/Header";
import api from "./utils/api";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shop: [],
      
    };
  }
  componentDidMount() {
    api.get().then((result) => {
      console.log(result);
      this.setState({
        shop: result.data.merchants,
        
      });
    });
  }

  render() {
    return (
      <div>
        {/* <div className="row col-12 m-0 p-0 top ">
          <div className="col-1 p-0 m-0"></div>
          <div className="col-10 py-3">
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
                className="form-control"
                placeholder="ค้นหา ชื่อ ร้านอาหาร และเครื่องดื่ม ร้านธงฟ้า ร้านค้า OTOP และสินค้าทั่วไป"
              />
              <div class="input-group-append">
                <button
                  class="btn btn-outline-secondary"
                  type="button"
                  id="button-addon2"
                >
                  Button
                </button>
              </div>
            </div>

 
          </div>

          <div className="col-1"></div>
        </div> */}

        <Header></Header>

        <div className="row col-12 m-0 p-0 title">
          <div className="col-1 p-0 m-0"></div>
          <div className="py-2">
            <span className="topichead pl-3 ">หน้าแรก / ค้นหา</span>
          </div>
          <div className="col-2 p-0 m-0"></div>
        </div>

        <div className="pt-4 pb-5 px-2">
          <div className=" pl-3">
            <span className="topicresult">
              ผลการค้นหา ร้านอาหารและเครื่องดื่ม ทั้งหมด
            </span>
          </div>
          <div className="row col-12  p-0 m-0 pt-5 ">
            <div className="col-sm-3 col-md-3 display">
              <LeftCard></LeftCard>
            </div>

            <div className="col-sm-12 col-md-9 p-0 m-0 pl-2 pr-3 ">
              <div className="pb-2">
                {this.state.shop.map((shop) => {
                  return (
                    <Body
                      picshop={shop.coverImageId}
                      alt="..."
                      class="rounded float-left"
                      shopname={shop.shopNameTH}
                      shoptype={shop.subcategoryName}
                      levelprice={shop.priceLevel}
                      ratelevel="฿฿฿"
                      province={shop.addressDistrictName}
                      city={shop.addressProvinceName}
                      describe={shop.highlightText}
                      recommend={shop.recommendedItems}
                      facilities={shop.facilities}
                    ></Body>
                  );
                })}
              </div>

              <div className="pb-2">
                
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
