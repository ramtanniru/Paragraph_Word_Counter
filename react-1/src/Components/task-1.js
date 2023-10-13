import React, { useState } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

function Task1() {
  const [txt, setTxt] = useState("");
  const [len, setLen] = useState("0");
  const update = (event) => {
    event.preventDefault();
    let text = event.target.value;
    let x = text.split(" ");
    setLen(x.length);
    setTxt(() => text);
  };
  return (
    <>
      <div
        className="w-50 d-flex
     flex-column mx-auto my-5 p-5 card shadow align-items-start gap-3"
        style={{ fontFamily: "Times New Roman" }}>
        <h1 className="mx-auto fw-bold">Responsive paragraph word counter</h1>
        <textarea
          id="input"
          onChange={update}
          className="form-control"></textarea>
        <p>Word count:{len}</p>
      </div>
    </>
  );
}

export default Task1;