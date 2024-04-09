import React from "react";
import { RecoilRoot } from "recoil";
import { MakeToDo } from "./Components/MakeToDo/MakeToDo";
import Title from "./Components/Title/Title";
import { FullList } from "./Components/List/FullList/FullList";

function App() {
  return (
    <div className="main-container">
      <Title />
      <RecoilRoot>
        <MakeToDo />
        <FullList />
      </RecoilRoot>
    </div>
  );
}

export default App;
