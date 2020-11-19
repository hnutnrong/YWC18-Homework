import React, { Component } from "react";
import api from "../utils/api";

class Price extends Component {

  constructor(props) {
    super(props);
    this.state = {
      price: [],
    };
  }
  componentDidMount() {
    api.get().then((result) => {
      console.log(result);
      this.setState({
        price: result.data.priceRange,
        
      });
    });
  }
  render(props) {
    return (
      <div>
        <div className="">
          
             <select className="select custom-select custom-select-sm"> 
             {this.state.price.map((prices) => {
                  return <option>{prices}</option>;
                })}
                      </select> 


            

               

            
            
        
        </div>
      </div>
    );
  }
}

export default Price;
