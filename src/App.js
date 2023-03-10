import './App.css'
import Cards from './components/cards/Cards.jsx'
import Nav from './components/nav/Nav.jsx'
import { useState } from 'react';

function App () {

  const [characters, setCharacters] = useState([]);

  function onClose(id){
    setCharacters(characters.filter((element) => element.id !== id));
  }

  function onSearch(character){
     fetch(`https://rickandmortyapi.com/api/character/${character}`)
      .then((response) => response.json())
      .then((data) => {
         if (data.name) {
          characters.find((element) => element.id === data.id) === undefined
            ? setCharacters((characters) => [...characters, data])
            : alert("Personaje repetido, prueba otro ID");
         } else {
            window.alert('No hay personajes con ese ID');
         }
      });
  }

  function random() {
    let randomId = Math.floor(Math.random() * 826);
    onSearch(randomId);
  }

  return (
    <div className='App' style={{ padding: '25px' }}>
      <div>
        <Nav onSearch={onSearch} random={random} />
      </div>
      <div>
        <Cards characters={characters} onClose={onClose} />
      </div>
      
    </div>
  );
}

export default App
