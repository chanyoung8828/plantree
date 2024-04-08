import React from "react";
import { RecoilRoot } from "recoil";
import { MakeToDo } from "./Components/MakeToDo/MakeToDo";
import Title from "./Components/Title/Title";

function App() {
  return (
    <div className="main-container">
      <Title />
      <RecoilRoot>
        <MakeToDo />
      </RecoilRoot>
    </div>
  );
}

export default App;
