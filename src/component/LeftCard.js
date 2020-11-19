import React, { Component } from "react";
 import "../App.css";
 import Filter from "./Filter";
 import Province from "./Province";
import Price from "./Price";

class LeftCard extends Component {
  render(props) {
    return (
      <div>

        <div className=" pt-3 pl-3 p-0 m-0 filtercard">
              <div className="pb-3">
                <span className="shoptype">ประเภทร้านค้า</span>
              </div>
              <div className="selecttypeshop">
              <Filter type="ทั้งหมด"></Filter>
              <Filter type="ร้านอาหารและเครื่องดื่ม"></Filter>
              <Filter type="ร้านค้า OTOP"></Filter>
              <Filter type="ร้านธงฟ้า"></Filter>
              <Filter type="สินค้าทั่วไป"></Filter>
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
          

            
            
        
       
      </div>
    );
  }
}

export default LeftCard;
