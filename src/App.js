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
import FilterMobile from "./component/FilterMobile";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shop: [],
    };
  }
  componentDidMount() {
    api.get().then((result) => {
      console.log(result)
      this.setState({
        shop: result.data.merchants,
      });
    });
  }

  render() {
    return (
      <div>
        <FilterMobile/>
        <Header></Header>

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
                      status ={shop.isOpen}
                      province={shop.addressDistrictName}
                      city={shop.addressProvinceName}
                      describe={shop.highlightText}
                      recommend={shop.recommendedItems}
                      facilities={shop.facilities}
                    ></Body>
                  );
                })}
              </div>
              <center>
                

            <div className="row col-12">
              <div className="col-3">
                
              </div>
              <div className="col-6 pt-3">
              <button type="button" className="btn btn-lg buttonbg">
                ดูเพิ่มเติม
              </button>
              </div>
              </div>
              </center>
              
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
