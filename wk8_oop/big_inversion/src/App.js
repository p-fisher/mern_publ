import React from "react";
import "./App.css";
import PersonCard from "./components/PersonCard";

function App() {
  return (
    <div className="App">
      <PersonCard
        lastName={"Lemon"}
        firstName={"Liz"}
        age={41}
        hair={"brown"}
      />
      <PersonCard
        lastName={"Donaghy"}
        firstName={"John F."}
        age={57}
        hair={"b/w"}
      />
      <PersonCard 
      lastName={"Parcell"}
      firstName={"Kenneth"}
      age={100}
      hair={"mousey"}
      />
      <PersonCard
        lastName={"Hornberger"}
        firstName={"Pete"}
        age={48}
        hair={"balding"}
      />
    </div>
  );
}

export default App;