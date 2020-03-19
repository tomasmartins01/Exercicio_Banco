import React, { useState } from "react";
import RegisterAccount from "./Components/RegisterAccount";
import RegisterList from "./Components/RegisterList";
import "./style.css";

function App() {
  const [recordList, setRecordList] = useState([]);
  let [balance, setBalance] = useState(0);
  return (
    <div className="App">
      <h1>{balance}</h1>

      <RegisterAccount
        handleSetRecordList={(title, amount) => {
          const amountToNumber = Number(amount);
          const newList = [...recordList];
          newList.push({ title, amount });
          newList.sort((a, b) => b.amount - a.amount);
          setRecordList(newList);
          setBalance(balance + amountToNumber);
        }}
      />

      <RegisterList
        recordList={recordList}
        handleDelete={index => {
          setBalance(balance - Number(recordList[index].amount));
          let newList = recordList.map(item => item);
          newList.splice(index, 1);
          setRecordList(newList);
        }}
      />

      <hr></hr>
    </div>
  );
}

export default App;
