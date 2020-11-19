import React, { Component } from "react";
import api from "../utils/api";
class Filter extends Component {

  constructor(props) {
    super(props);
    this.state = {
      shoptype: [],
    };
  }
  componentDidMount() {
    api.get().then((result) => {
      // result.data.provinces
      this.setState({
        shoptype: result.data.categories,
      });
      // console.log(result.data.categories)
    });
  }

  render(props) {
    return (
      <div>
          <div className="form-check py-1">
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
