import './App.css';
import { Camera } from './Components/Camera'
import { Harddisk } from './Components/Harddisk'
import { Type } from './Components/Type'
import { useState } from "react";
import { Dvr } from './Components/Dvr'
function App() {
  const [hd, setHD] = useState({});
  const [type, setType] = useState({
    type: "ECO",
    price: "1600"
  });
  const [count, setCount] = useState(0);
  const [install, setInstall] = useState(false);
  let camera = 3;
  const hdSet = [{
    size: "500GB",
    price: "2000"
  }, {
    size: "1000GB",
    price: "3780"
  }, {
    size: "2000GB",
    price: "5550"
  }, ];

  const typeOfCamera = [{
    type: "ECO",
    price: "1600"
  }, {
    type: "2MP",
    price: "2000"
  }, {
    type: "5MP",
    price: "2360"
  }];

  const typeOfDvr = [{
    type: "4CH",
    price: "4500"
  }, {
    type: "8CH",
    price: "8000"
  }, {
    type: "16CH",
    price: "13000"
  }];

  let installationFee = 450;
  const handleCameraClick = (e) => {
    setCount(e.target.innerHTML)
  }

  const handleDvrClick = (e) => {
    setCount(e.target.innerHTML)
  }

  const handleHDClick = (e, x) => {
    setHD(x)
  }

  const handleTypeClick = (e, x) => {
    setType(x)
  }
  return (
    <div className="App">
      <div>
        
        Type:
       <div></div>
          {typeOfCamera.map((x, i) =>
          <Type key={i} details = {x} handleClick={(e) => handleTypeClick(e, x)}/>
        )}
      </div>
      <div>

      DVR:
       <div></div>
          {typeOfDvr.map((x, i) =>
          <Type key={i} details = {x} handleClick={(e) => handleTypeClick(e, x)}/>
        )}
      </div>
      <div>

        Camera:
        <div></div>
        {[...Array(camera)].map((x, i) =>
          <Camera key={i} count = {i+1} handleClick={(e) => handleCameraClick(e)}/>
        )}
      </div>
      <div>
        Harddisk:
        <div></div>
        {hdSet.map((x, i) =>
          <Harddisk key={i} details = {x} handleClick={(e) => handleHDClick(e, x)}/>
        )}
      </div>
      <div>
        Install:
        <div></div>
          <input type="checkbox"  defaultChecked={install}  onChange={() => setInstall(!install)}></input>
      </div>
      <div>
        <span>Total: </span><span>{ (hd.price? Number(hd.price) : 0)+ (install ? installationFee* count : 0) + (type.price ? Number(type.price)* count : 0 ) }</span>
          
      </div>
    </div>
  );
}

export default App;
