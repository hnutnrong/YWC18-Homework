import React, { Component } from "react";
import "../App.css";
import Filter from "./Filter";
import Province from "./Province";

import LeftCard from "./LeftCard";

class FilterMobile extends Component {
  render(props) {
    const back = "<";
    return (
      <div>
        <div className="row  col-sm-12 p-0 m-0 py-3 bghead">
          <div className="col-4 col-sm-4">
            <span className="backbtfilter"
            onClick={this.props.back}  >{back}</span>
          </div>

          <div className="col col-sm pl-4">
            <span className="headFilter ">กรอกผล</span>
          </div>
        </div>

        <div className="row col-sm-12 p-0 m-0 pl-3 bgfilterbody">
          <div className="col-sm-12 pt-5 pl-4">
            <div className="pb-3 pt-5">
              <span className="shoptype ">ประเภทร้านค้า</span>
            </div>
            <Filter></Filter>

            <div className="pt-4 province">
              จังหวัด/ใกล้ฉัน
              <div className="col-sm p-0 m-0">
      
                <Province></Province>
                
              </div>
            </div>
            <div className="pt-4 price pb-2">
              <div className="pb-2">
              ช่วงราคาสินค้า(บาท)
              </div>
              <div className="row col-12 p-0 m-0 ">
                <div className="col-5 p-0 m-0">
                <input type="number" className="col-12 priceinput" placeholder="ราคาต่ำสุด"></input>
                </div>

                <div className="col-1 px-1">
                  <center>
                <span className="dat"> - </span>
                </center>
                </div>
             
                  <div className=" col-5 m-0 p-0 ">
               
                <input type="number" className="col-12 priceinput" placeholder="ราคาสูงสุด"></input>
                 
                  </div>
                 

              
              </div>
              <div className="pt-2">
                <button
                  type="button"
                  className="btn btn-outline-primary col-11 py-1"
                >
                  ตกลง
                </button>
                

              </div>
            </div>

            <div className="pt-4 price pb-2">ประเภท</div>
            <div className="form-check py-1">
              <input
                className="form-check-input"
                type="radio"
                name="exampleRadios"
                id="exampleRadios1"
                value="option1"
              />

              <label className="form-check-label radiocheck"> ทั้งหมด</label>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FilterMobile;
