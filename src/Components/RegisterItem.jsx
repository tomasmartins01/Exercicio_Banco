import React from "react";

function RegisterItem({ title, amount }) {
  return (
    <li>
      <p>
        Title: {title} | Amount: {amount}
      </p>
    </li>
  );
}

export default RegisterItem;
