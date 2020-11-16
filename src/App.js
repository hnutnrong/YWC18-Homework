import "./App.css";
import Image from "./img/logo.png";

function App() {
  return (
    <div>
      <div className="row col-12 m-0 p-0 top ">
        <div className="col-1"></div>
        <div className="col-8 py-3">
          <img src={Image} width="150px" alt="headlogo"></img>
      <span className="pl-5">
          <button
            class="btn btn-outline-secondary dropdown-toggle"sss
            type="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            พื้นที่ใกล้ฉัน
          </button>
          <div class="dropdown-menu">
            <a class="dropdown-item" href="#">
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
          </div>
          <input
            type="text"
            class="form-control"
            aria-label="Text input with dropdown button"
          />
           </span>
        </div>
       
        
        <div className="col-1"></div>
      </div>

      <div className="row col-12 m-0 p-0 title">
        <div className="col-2"></div>
        <div className="py-2">
          <span className="topichead">หน้าแรก / ค้นหา</span>
        </div>
        <div className="col-2"></div>
      </div>
    </div>
  );
}

export default App;
