import React, { useState } from "react";

function RegisterAccount({ handleSetRecordList }) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState(0);

  return (
    <form
      onSubmit={event => {
        setTitle("");
        setAmount(0);
        handleSetRecordList(title, amount);
        event.preventDefault();
      }}
    >
      Title
      <input
        type="text"
        value={title}
        onChange={event => setTitle(event.target.value.trim())}
      />
      Value{" "}
      <input
        type="number"
        value={amount}
        onChange={event => setAmount(event.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default RegisterAccount;
