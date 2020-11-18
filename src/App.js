import React, { Component } from "react";
import "./App.css";
import Image from "./img/logo.png";
import ImageBG from "./img/bg.png";
import Filter from "./component/Filter";
import Body from "./component/Body";
import Province from "./component/Province"

class App extends Component {
  render() {
    return (
      <div>
        
        <div className="row col-12 m-0 p-0 top ">
          <div className="col-1"></div>
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
               
               <i class="fa fa-map-marker" aria-hidden="true"></i>
               พื้นที่ใกล้ฉัน
                  <span className="pl-5"></span>
                </button>
                {/* <div className="dropdown-menu">
                <a className="dropdown-item" href="#">
                  Action
                </a>
                <a class="dropdown-item" href="#">
                  Another action
                </a>
                <a class="dropdown-item" href="#">
                  Something else here
                </a>
                <div role="separator" class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">
                  Separated link
                </a>
              </div> */}
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

        <div className="row col-12 m-0 p-0 title">
          <div className="col-1 p-0 m-0"></div>
          <div className="py-2">
            <span className="topichead pl-3 ">หน้าแรก / ค้นหา</span>
          </div>
          <div className="col-2"></div>
        </div>
        <div className="pt-4 pb-5 pl-4">
          <span className="topicresult">
            ผลการค้นหา ร้านอาหารและเครื่องดื่ม ทั้งหมด
          </span>
          <div className="row col-12 p-0 m-0 pt-5 ">
            <div className="col-3 pt-3 pl-3 p-0 m-0 leftcard">
              <div className="pb-3">
                <span className="">ประเภทร้านค้า</span>
              </div>
              <Filter type="ทั้งหมด"></Filter>
              <Filter type="ร้านอาหารและเครื่องดื่ม"></Filter>
              <Filter type="ร้านค้า OTOP"></Filter>
              <Filter type="ร้านธงฟ้า"></Filter>
              <Filter type="สินค้าทั่วไป"></Filter>

              <div className="pt-5">
                จังหวัด/ใกล้ฉัน
                <div>
                 
                  <Province></Province>
                </div>
              </div>

              <div className="pt-4">
                ราคา
                <div>
                  <div className="row col-12 p-0 m-0">
                    <div className="col-10 p-0 m-0 pt-2">
                      <select className="select custom-select custom-select-sm">
                        <option>กรุณาเลือก</option>
                        <option value="1"></option>
                        <option value="2"></option>
                        <option value="3"></option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-4 pb-2">
                <span className="">ประเภทร้านอาหารและเครื่องดื่ม</span>
              </div>
              <div className="pt-2">
                <Filter type="ทั้งหมด"></Filter>
                <Filter type="อาหารทั่วไป อาหารตามสั่ง อาหารจานเดียว"></Filter>
                <Filter type="ก๋วยเตี๋ยว ก๋วยจั๊บ"></Filter>
                <Filter type="ชาบู สุกี้ยากี้ หม้อไฟ"></Filter>
                <Filter type="ปิ้งย่าง หมูกะท"></Filter>
                <Filter type="ของหวาน ไอศกรีม เบเกอรี่ เครื่องดื่ม"></Filter>
                <Filter type="ผับ ร้านเหล้า บาร์"></Filter>
                <Filter type="ร้านขายผลไม้ / ร้านขายผัก"></Filter>
                <Filter type="ร้านอาหารอีสาน"></Filter>
                <Filter type="ร้านอาหารญี่ปุ่น"></Filter>
                <Filter type="ข้าวต้ม โจ๊ก เกาเหลา"></Filter>
                <Filter type="คาราโอเกะ"></Filter>
                <Filter type="บุฟเฟ่ต์"></Filter>
                <Filter type="บุฟเฟ่ต์โรงแรม"></Filter>
                <Filter type="พิซซ่า ฟาสต์ฟู้ด จานด่วน"></Filter>
                <Filter type="อาหารเกาหลี"></Filter>
                <Filter type="อาหารจีน"></Filter>
                <Filter type="อาหารเจ มังสวิรัติ สุขภาพ"></Filter>
                <Filter type="อาหารใต้"></Filter>
                <Filter type="อาหารทะเล"></Filter>
                <Filter type="อาหารนานาชาติ"></Filter>
                <Filter type="อาหารมุสลิม อิสลาม"></Filter>
                <Filter type="อาหารเวียดนาม"></Filter>
                <Filter type="อาหารอินเดีย"></Filter>
                <Filter type="อาหารเหนือ"></Filter>
                <Filter type="อาหารว่าง ขนม ของกินเล่น"></Filter>
                <Filter type="อื่นๆ"></Filter>
                <div className="pb-3"></div>
              </div>
            </div>

            <div className="col-9">
                <Body image={ImageBG}></Body>
              
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
