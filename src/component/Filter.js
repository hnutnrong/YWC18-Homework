import React, { Component } from "react";

class Filter extends Component {
  render(props) {
    return (
      <div>
        
       
         
          <div class="form-check py-1">
            <input
              className="form-check-input"
              type="radio"
              name="exampleRadios"
              id="exampleRadios1"
              value="option1"
            
            />
            <label className="form-check-label" >
              {this.props.type}
            </label>

            
            
        
        </div>
      </div>
    );
  }
}

export default Filter;
