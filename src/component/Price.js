import React, { Component } from "react";

class Price extends Component {
  render(props) {
    return (
      <div>
        <div className="">
          
             <select className="select custom-select custom-select-sm">
                        <option>กรุณาเลือก</option>
                        <option value="1">ไม่เกิน 100 บาท</option>
                        <option value="2">100 - 300 บาท</option>
                        <option value="3">300 - 600 บาท</option>
                        <option value="4">มากกว่า 600 บาท</option>
                      </select>

            
            
        
        </div>
      </div>
    );
  }
}

export default Price;
