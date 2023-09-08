import React, { useState } from "react";
import styled from "styled-components";
import NavBar from "../Components/NavBar";

export default function Challenge() {
  const data = [1, 2, 3, 4, 5, 6];
  return (
    <div>
      {/* <NavBar></NavBar> */}
      <div>
        {data.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
      </div>
    </div>
  );
}
