import React, { useState } from "react";
import "./App.css";
import { Input, Typography } from "antd";

function App() {
  const [text, setText] = useState<string>("");

  const [textDebounce, setTextDebounce] = useState<string>("");

  function handleChangeNormal(value: string) {
    setText(value);
  }
  function handleChangeDebounce(value: string) {
    let timer: any;
    clearInterval(timer)
    timer = setInterval(()=>{
      setTextDebounce(value)
      clearInterval(timer)
    }, 2000)
  }

  return (
    <div
      style={{ display: "flex", alignItems: "center", flexDirection: "column" }}
      className="App"
    >
      <div style={{ width: "25%", margin: "20px 0px" }}>
        <Input
          onChange={(e) => {
            handleChangeNormal(e.target.value);
            handleChangeDebounce(e.target.value);
          }}
          size="large"
        />
      </div>
      <div style={{ width: "25%", margin: "20px 0px" }}>
        <Typography.Title level={1}>Normal: {text}</Typography.Title>
        <Typography.Title level={1}>Debounce: {textDebounce}</Typography.Title>
      </div>
    </div>
  );
}

export default App;
