import React, { Component } from "react";

class MobileHeader extends Component{
render(props){
  return(
    <div>

         <div className="row col-12 m-0 p-0 top ">
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
                  Buttonasdasd
                </button>
              </div>
            </div>

          </div>

          <div className="col-1"></div>
        </div>
    </div>
  )
}
}

class Header extends Component {
  render(props) {
    return (
      <div>

        <MobileHeader></MobileHeader>
        
{/*        
        <div className="row col-12 m-0 p-0 top ">
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
        </div>
 */}

            
            
        
        </div>

    );
  }
}

export default Header;
