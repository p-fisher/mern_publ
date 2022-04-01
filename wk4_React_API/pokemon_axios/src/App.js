//
import axios from 'axios';
import React, {useState,useEffect} from 'react';


function List() {
  const [pokemonList, setPokemonList] = useState([]);
  
  
  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=1000&offset=1000')
    .then(response => {
      console.log('axiossizzle');
      setPokemonList(response.data.results);
    })
    .catch((err) => console.log(err));
  }, []);
  
  return (
    <div style={{width:"150px", margin:"0 auto"}}>
      {pokemonList.map((item, index) => (
        <div key={index}>{item.name}</div>
      ))}
    </div>
  );
  }
  
  export default List;