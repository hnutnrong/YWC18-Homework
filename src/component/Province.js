import React, { Component } from "react";

class Province extends Component {
  render(props) {
    return (
      <div>
        <div className="">
          <div className="row col-12 p-0 m-0">
            <div className="col-10 p-0 m-0 pt-2">
              <select className="select custom-select custom-select-sm">
                <option disabled selected hidden value="">
                  พื้นที่ใกล้ฉัน
                </option>
                <option value="1">กรุงเทพมหานคร</option>
                <option value="2">สมุทรปราการ</option>
                <option value="3">นนทบุรี</option>
                <option value="4">ปทุมธานี</option>
                <option value="5">พระนครศรีอยุธยา</option>
                <option value="6">อ่างทอง</option>
                <option value="7">ลพบุรี</option>
                <option value="8">สิงห์บุรี</option>
                <option value="9">ชัยนาท</option>
                <option value="10">สระบุรี</option>
                <option value="11">ชลบุรี</option>
                <option value="12">ระยอง</option>
                <option value="13">จันทบุรี</option>
                <option value="14">ตราด</option>
                <option value="15">ฉะเชิงเทรา</option>
                <option value="16">ปราจีนบุรี</option>
                <option value="17">นครนายก</option>
                <option value="18">สระแก้ว</option>
                <option value="19">นครราชสีมา</option>
                <option value="20">บุรีรัมย์</option>
               

              </select>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Province;
