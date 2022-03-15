import './App.css';

import Person from './components/PersonCard';

function App() {
  return (
    <div className="App">
      <Person firstName={ "Mary" } lastName={ "Penrod" } age={ 44 } hairColor={ "silver-blue" } />
      <Person firstName={ "Bill" } lastName={ "Smithers" } age={ 56 } hairColor={ "no hair" } />
      <Person firstName={ "Chester" } lastName={ "Jackson" } age={ 32 } hairColor={ "black" } />
      <Person firstName={ "Woody" } lastName={ "Klein" } age={ 71 } hairColor={ "gray" } />      
    </div>
  );
}
export default App;