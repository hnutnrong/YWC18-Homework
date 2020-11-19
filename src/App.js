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
componentDidMount(){
  api.get()
  .then((result)=>{
    console.log(result.data.merchants)
    this.setState({
      shop:result.data.merchants
    })
  })
  
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
                  return ;
                })}

                <Body
                  picshop="https://images.unsplash.com/photo-1597227772909-a6d166b48b79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
                  alt="..."
                  class="rounded float-left"
                  shopname="Kanysorn Cafe"
                  shoptype="สินค้า และ บริการ เกี่ยวกับการตกแต่งบ้าน"
                  levelprice="฿"
                  ratelevel="฿฿฿"
                  province="เขตธนบุรี กรุงเทพมหานคร"
                  describe="<strong>ร้านทุกอย่าง</strong> โต๊ะ ตู้ เตียง"
                  recommend="แจกัน, จานชาม, เก้าอี้สามขา"
                  car={CarImage}
                ></Body>
              </div>

              <div className="pb-2">
                {/* <Body
                  picshop="https://images.unsplash.com/photo-1589578228447-e1a4e481c6c8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80"
                  alt="..."
                  class="rounded float-left"
                  shopname="Wiput Shop"
                  shoptype="ร้านขายเสื้อผ้า / เครื่องประดับ / สินค้าแฟชั่น"
                  levelprice="฿฿"
                  ratelevel="฿฿"
                  province="เขตพระนคร กรุงเทพมหานคร"
                  describe="Custom Keyboard By <strong>Wiput</strong>, จัดจำหน่าย Keychron ทุกรุ่น"
                  recommend=" Keychron K2, Keychron K4"
                  car={CarImage}
                ></Body>
              </div>
              <div className="pb-2">
                <Body
                  picshop="https://images.unsplash.com/photo-1496412705862-e0088f16f791?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
                  alt="..."
                  class="rounded float-left"
                  shopname="YWC Shop"
                  shoptype="อาหารทั่วไป อาหารตามสั่ง อาหารจานเดียว"
                  levelprice="฿฿฿฿"
                
                  province="เขตพระนคร กรุงเทพมหานคร"
                  describe="ร้านนี้ไม่ค่อยมีอะไรขาย เน้นขายขำเป็นหลัก <strong>มีที่จอดรถ</strong>"
                  recommend="กาแฟสด, ขนมปังปิ้ง, ข้าวไข่เจียวแหนม"
                  car={CarImage}
                ></Body>
              </div>
              <div className="pb-2">
                <Body
                  picshop="https://images.unsplash.com/photo-1432139555190-58524dae6a55?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1355&q=80"
                  alt="..."
                  class="rounded float-left"
                  shopname="Chayanon Cafe"
                  shoptype="อาหารทั่วไป อาหารตามสั่ง อาหารจานเดียว"
                  levelprice="฿฿฿"
                  ratelevel="฿"
                  province="เขตลาดกระบัง กรุงเทพมหานคร"
                  describe="<strong>ร้านกาแฟสด</strong> ดริปเองโดยบาริสต้าชื่อดังระดับประเทศ"
                  recommend="กาแฟสด, ขนมปังปิ้ง"
                  car={CarImage}
                ></Body>
              </div>
              <div className="pb-2">
                <Body
                  picshop="https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
                  alt="..."
                  class="rounded float-left"
                  shopname="วายดับบลิวซีหมูกระทะ"
                  shoptype="อาหารทั่วไป อาหารตามสั่ง อาหารจานเดียว"
                  levelprice="฿฿฿"
                  ratelevel="฿"
                  province="เขตธนบุรี กรุงเทพมหานคร"
                  describe="สด สะอาด <strong>ราคาเป็นมิตร</strong> จนต้องมากินซ้ำ"
                  recommend="หมูกระทะ, สุกี้"
                  car={CarImage}
                ></Body> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
