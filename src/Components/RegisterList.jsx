import React from "react";
import RegisterItem from "./RegisterItem";

function RegisterList({ recordList, handleDelete }) {
  return (
    <ul>
      {recordList.map((record, index) => (
        <div className="box">
          <RegisterItem title={record.title} amount={record.amount} />
          <button classname="x" onClick={() => handleDelete(index)}>
            X
          </button>
        </div>
      ))}
    </ul>
  );
}

export default RegisterList;
