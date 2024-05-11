import React from "react";
import './DynamicHeader.css';

function DynamicHeader({ header_1_text, header_2_text }) {

  return (
    <div className="DynamicHeader">
      <h1>{header_1_text}</h1>
      <h2>{header_2_text}</h2>
    </div>
  )
}

export default DynamicHeader;
