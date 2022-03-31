
import React, {useState,useEffect} from 'react';
// import * as ReactDOM from 'react-dom';


const List = (props) => {
  const [state,setState] = useState(0);

useEffect(() => {
  console.log("check");
  // fetch('https://pokeapi.co/api/v2/pokemon/1')
  fetch('https://pokeapi.co/api/v2/pokemon?limit=1000&offset=1000')
  .then(response => {
    return response.json()
  })
  .then(response => {
    setState({
      pokemon: response.results
    })
  })
}, []);


return (
  <div style={{width:"150px", margin:"0 auto"}}>
    {state.pokemon ? state.pokemon.map((item, index) => {
      return(<div key={index}>{item.name}</div>)
    }):""}
  </div>
);
}

export default List;