import Axios from "axios";
import React, { Component } from "react";
import api from "../utils/api";

class Province extends Component {
  constructor(props) {
    super(props);
    this.state = {
      provinces: [],
    };
  }
  componentDidMount() {
    api.get().then((result) => {
      // result.data.provinces
      this.setState({
        provinces: result.data.provinces,
      });
      // console.log(this.state.provinces)
    });
  }

  render(props) {
    return (
      <div>
        <div className="">
          <div className="row col-12 p-0 m-0 ">
            <div className="col-10 p-0 m-0 pt-2">
              <select className="select custom-select custom-select-sm">
                <option disabled selected hidden value="">
                  พื้นที่ใกล้ฉัน
                </option>

                {this.state.provinces.map((province) => {
                  return <option>{province}</option>;
                })}

               
               
              </select>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Province;
