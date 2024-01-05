import { useState } from 'react';
import './App.css'
import axios from 'axios';



function App() {

  // API Call
  const [pinCode, setPinCode] = useState()
  const [data, setData] = useState([])

  const handleApi =async ()=>{
    // console.log(pinCode);
    // console.log(res.data);
    const res = await axios.get(`https://api.postalpincode.in/pincode/${pinCode}`)
    setData(res.data)
    
  }

  return (
    <> 
      <h1>Postal Data </h1>    
      <input type="number" onChange={(e)=>setPinCode(e.target.value)} />
      <button onClick={handleApi}>Get Date</button>
      <div className="">
        {
        //  JSON.stringify(data[0]?.PostOffice)
         
        data[0]?.PostOffice.map((v,i)=>
        <>
        <div key={i} className="">{v.Name}</div>
        <div key={i} className="">{v.BranchType}</div>
        </>
        )
        }
      </div>
    </>
  )
}

export default App
