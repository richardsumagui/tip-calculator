import "./App.css";
import Bill from "./components/Bill";
import Reset from "./components/Reset";
import Total from "./components/Total";
import You from "./components/You";
import { useState } from "react";

function App() {
  const [bill, setBill] = useState("");
  const [mySatisfactory, setMySatisfactory] = useState("0");
  const [fSat, setFSat] = useState("0");

  let handleBill = (e) => {
    if (e && isNaN(e)) {
      return;
    }
    setBill(e);
  };
  const handleMySat = (e) => {
    setMySatisfactory(e);
  };
  const handleFriendSat = (e) => {
    setFSat(e);
  };
  const handleNewTotal=()=>{
    const calculated =Number(bill)!== 0 ? Number(bill) + (Number(bill) * (((Number(mySatisfactory) + Number(fSat)) / 2)/100)) : 0;
    return calculated;
  }
  let newTotal= handleNewTotal();
  const handleReset=()=>{
    setBill("")
    setMySatisfactory("0")
    setFSat("0")
    newTotal=0
  }
  return (
    <div className="App">
      <Bill bill={bill} onHandleBill={handleBill}/>
      <You value={mySatisfactory} onChange={handleMySat}>How did you like the service?</You>
      <You value={fSat} onChange={handleFriendSat}>How did your friend like the service?</You>
      <Total Total={newTotal}/>
      <Reset onReset={handleReset}/>
    </div>
  );
}

export default App;
