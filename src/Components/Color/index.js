import React from "react";

function Color(props) {
  return (
    <li className="newColor">
      <div
        className="colorHolder"
        style={{
          backgroundColor: `${props.color}`,
          height: "100px",
          width: "100px",
        }}
      ></div>
      <p>{props.color}</p>
      <button onClick={() => props.remove(props.color)}>Remove</button>
    </li>
  );
}

export default Color;
