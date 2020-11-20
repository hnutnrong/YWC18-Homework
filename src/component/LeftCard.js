import React, { Component } from "react";
import "../App.css";
import Filter from "./Filter";
import Province from "./Province";
import Price from "./Price";
import api from "../utils/api";
import FilterFood from "./FilterFood";

class LeftCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shoptype: [],
      subcategories: [],
    };
  }

  componentDidMount() {
    api.get().then((result) => {
      // result.data.provinces
      this.setState({
        shoptype: result.data.categories,
      });
      // console.log(result)
    });
  }

  showCategory(key) {

    
    this.setState({
      subcategories: this.state.shoptype[key].subcategories,
    });
  }

  render(props) {
    return (
      <div>
        <div className=" pt-3 pl-3 p-0 m-0 filtercard">
          <div className="pb-3">
            <span className="shoptype">ประเภทร้านค้า</span>
          </div>
          <div className="selecttypeshop">
            <div className="radiocheck">
              <div className="form-check py-1">
                <input
                  className="form-check-input"
                  type="radio"
                  name="exampleRadios"
                  id="exampleRadios1"
                  value="option1"
                 
                />

                <label className="form-check-label"> ทั้งหมด</label>
              </div>

              {this.state.shoptype.map((type, key) => {
                return (
                  <div className="form-check py-1">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="exampleRadios"
                      id="exampleRadios1"
                      value={key}
                      onClick={() => this.showCategory(key)}
                    />
                    <label className="form-check-label">{type.name}</label>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="pt-4 province">
            จังหวัด/ใกล้ฉัน
            <div>
              <Province></Province>
            </div>
          </div>

          <div className="pt-4 price">
            ราคา
            <div>
              <div className="row col-12 p-0 m-0">
                <div className="col-10 p-0 m-0 pt-2">
                  <Price />
                </div>
              </div>
            </div>
          </div>

          <div className="pt-4 pb-2">
            <span className="typefood">ประเภทร้านอาหารและเครื่องดื่ม</span>
          </div>
          <div className="pt-2 selecttypefood">
            {this.state.subcategories.length == 0 ? (
              <div></div>
            ) : (
              <div>
                {this.state.subcategories.map((subc) => {
                  return<div className="form-check py-1">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="exampleRadios"
                      id="exampleRadios1"
                      value=""
                    />
                    <label className="form-check-label">{subc}</label>
                  </div>;
                })}
                
              </div>
            )}
        
            <div className="pb-3"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default LeftCard;
