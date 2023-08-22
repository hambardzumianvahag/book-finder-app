import React, { useState } from "react";
import Input from "./Input";
import { MyContext } from "./Context";
import Result from "./Result";

export default function Main() {
  const [value, setValue] = useState("");
  const [result, setResult] = useState([]);
  return (
    <div>
      <MyContext.Provider value={{ value, setValue, result, setResult }}>
        <Input />
        <Result />
      </MyContext.Provider>
    </div>
  );
}
