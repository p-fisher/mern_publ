import React from "react";
import PersonCard from "./components/PersonCard";
import "./App.css";

function App() {
  return (
    <div className="App">
      <PersonCard
        lastName={"Lemon"}
        firstName={"Liz"}
        age={44}
        hair={"brown"}
      />
      <PersonCard
        lastName={"Donaghy"}
        firstName={"Jack F."}
        age={55}
        hair={"salt and pepper"}
      />
      <PersonCard 
        lastName={"Parcell"}
        firstName={"Kenneth"}
        age={140}
        hair={"mousey blonde"}
      />
      <PersonCard
        lastName={"Rossitano"}
        firstName={"Frank"}
        age={41}
        hair={"black"}
      />
    </div>
  );
}

export default App;