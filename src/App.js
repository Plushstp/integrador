import './App.css';
import Cards from './components/cards/Cards.jsx';
import Nav from './components/nav/Nav.jsx';
import About from './components/about/About.jsx';
import Detail from './components/detail/Detail.jsx';
import Error from './components/error/Error.jsx';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';


function App ()  {
  const [characters, setCharacters] = useState([]);
  
  /*CLASE FELI
    const onSearch = (id) => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((response) => response.json())
      .then((data) => {
         data.name ? setCharacters([...characters, data]): alert("Personaje no encontrado")
         })
         .catch((error) => console.log(error));
  };*/

  function onSearch(character){
     fetch(`https://rickandmortyapi.com/api/character/${character}`)
      .then((response) => response.json())
      .then((data) => {
         if (data.name) {
          characters.find((element) => element.id === data.id) === undefined
            ? setCharacters((characters) => [...characters, data])
            : alert("Personaje repetido, prueba otro ID");
         } else {
            alert('No hay personajes con ese ID! Prueba con uno menor o igual a 826');
         }
      });
  }

  /* CLASE FELI
    const onClose = (id) => {
    const filtered = characters.filter((char) => char.id !== Number(id) )
    setCharacters([...characters, filtered])
  }*/

  function onClose(id) {
    setCharacters(characters.filter((element) => element.id !== id));
  }
  
  function random() {
    let randomId = Math.floor(Math.random() * 826);
    onSearch(randomId);
  }

  return (
    <div className='App' style={{ padding: '25px' }}>
      <Nav onSearch={onSearch} random={random}/>

      <Routes>
        <Route exact path='/home' element={<Cards characters={characters} onClose={onClose}/>} />
        <Route exact path='/about' element={<About/>} />
        <Route exact path='/detail/:detailId' element={<Detail/>} />
        <Route path='*' element={<Error/>} />
      </Routes>
      
    </div>
  );
}

export default App


  

  
