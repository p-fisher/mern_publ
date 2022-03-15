import './App.css';

import Person from './components/PersonCard';

const personArray = [
  {
    firstName: "Mary",
    lastName: "Penrod",
    age: 44,
    hairColor: "silver-blue"
  },
  {
    firstName: "Bill",
    lastName: "Smithers",
    age: 56,
    hairColor: "no hair"
  },
  {
    firstName: "Chester",
    lastName: "Jackson",
    age: 32,
    hairColor: "black"
  },
  {
    firstName: "Woody",
    lastName: "klein",
    age: 71,
    hairColor: "gray"
  }
];

function App() {
  return (
    <div className="App">
      {personArray.map((personObject, index) => (
        <Person 
          key = {index}
          firstName = {personObject.firstName}
          lastName = {personObject.lastName}
          age = {personObject.age}
          hairColor = {personObject.hairColor} 
        />
        ))}

      {/* <Person firstName={ personArray[0].firstName } lastName={ personArray[0].lastName } age={ personArray[0].age } hairColor={ personArray[0].hairColor } />
      <Person firstName={ personArray[1].firstName } lastName={ personArray[1].lastName } age={ personArray[1].age } hairColor={ personArray[1].hairColor } />
      <Person firstName={ personArray[2].firstName } lastName={ personArray[2].lastName } age={ personArray[2].age } hairColor={ personArray[2].hairColor } />
      <Person firstName={ personArray[3].firstName } lastName={ personArray[3].lastName } age={ personArray[3].age } hairColor={ personArray[3].hairColor } /> */}
    </div>
  );
}
export default App;