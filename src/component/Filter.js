import React, { Component } from "react";
import api from "../utils/api";
import FilterFood from "./FilterFood";
class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shoptype: [],
      subcategories:[],
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

  showCategory(key){
    // console.log( this.state.shoptype[key].subcategories);
   this.setState({
    subcategories:this.state.shoptype[key].subcategories,
   })
  }

  render(props) {
    return (
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

        {this.state.shoptype.map((type,key) => {
          return (
            <div className="form-check py-1">
              <input
                className="form-check-input"
                type="radio"
                name="exampleRadios"
                id="exampleRadios1"
                value={key}
                onClick={()=>this.showCategory(key)}
                
              />
              <label className="form-check-label">{type.name}</label>
      
    
            </div>
          );
        })}
      </div>
    );
  }
}

export default Filter;
