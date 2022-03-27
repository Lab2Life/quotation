import './App.css';
import { Camera } from './Components/Camera'
import { Harddisk } from './Components/Harddisk'
import { Type } from './Components/Type'
import { useState } from "react";

function App() {
  const [hd, setHD] = useState({});
  const [type, setType] = useState({});
  const [count, setCount] = useState(0);
  const [install, setInstall] = useState(false);
  let camera = 16;
  const hdSet = [{
    size: "500MB",
    price: "1000"
  }, {
    size: "1GB",
    price: "2000"
  }, {
    size: "2GB",
    price: "4000"
  }];

  const typeOfCamera = [{
    type: "ECO",
    price: "1000"
  }, {
    type: "2MP",
    price: "2000"
  }, {
    type: "5MP",
    price: "4000"
  }];
  let installationFee = 350;
  const handleCameraClick = (e) => {
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
        Camera:
        {[...Array(camera)].map((x, i) =>
          <Camera key={i} count = {i+1} handleClick={(e) => handleCameraClick(e)}/>
        )}
      </div>
      <div>
        Harddisk:
        {hdSet.map((x, i) =>
          <Harddisk key={i} details = {x} handleClick={(e) => handleHDClick(e, x)}/>
        )}
      </div>
      <div>
        Type:
        {typeOfCamera.map((x, i) =>
          <Type key={i} details = {x} handleClick={(e) => handleTypeClick(e, x)}/>
        )}
      </div>
      <div>
        Install:
          <input type="checkbox"  defaultChecked={install}  onChange={() => setInstall(!install)}></input>
      </div>
      <div>
        <div>Camera: {count} </div>
        <div> Price: {hd.price} </div>
        <div>Installation Fee per camera: {installationFee} </div>
        <div> Camera Type: {type.price} </div>
        <span>Total: </span><span>{count * (hd.price? Number(hd.price) : 0)+ (install ? installationFee* count : 0) + (type.price ? Number(type.price) : 0 )}</span>
      </div>
    </div>
  );
}

export default App;
