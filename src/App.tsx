import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Box, Tag } from "./modules/test/Component1";

function App() {
  return (
    <div className="App">
      <div style={{  justifyContent: "center" }}>
        <Tag />
        <Box />
      </div>
    </div>
  );
}

export default App;
