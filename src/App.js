import { useState, useEffect } from 'react';
import './App.css';
import Cards from './components/cards/Cards.jsx';
import Nav from './components/nav/Nav.jsx';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import About from './components/about/About.jsx';
import Detail from './components/detail/Detail.jsx';
import Error from './components/error/Error.jsx';
import Form from './components/form/Form.jsx';
import Favorites from './components/favorites/Favorites';

function App ()  {
  const [characters, setCharacters] = useState([]);
  
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

  
  function onClose(id) {
    setCharacters(characters.filter((element) => element.id !== id));
  }
  
  function random() {
    let randomId = Math.floor(Math.random() * 826);
    onSearch(randomId);
  }

  const location = useLocation();
  const navigate = useNavigate();
  const [access, setAccess] = useState(false);
  const username = 'ejemplo@gmail.com';
  const password = 'A1b2c3d4';

  function login(userData) {
    if (userData.password === password && userData.username === username) {
      setAccess(true);
      navigate('/home');
    }
  }

  useEffect(() => {
    !access && navigate('/');
  }, [access]);

  function logout(){
    setAccess(false);
  }

  return (
    <div className="App" style={{ padding: "25px" }}>
      {location.pathname !== '/' && <Nav onSearch={onSearch} random={random} logout={logout}/>}

      <Routes>
        <Route exact path='/' element={<Form login={login}/>}></Route>
        <Route exact path='/home' element={<Cards characters={characters} onClose={onClose}/>}></Route>
        <Route exact path='/about' element={<About/>}></Route>
        <Route exact path='/favorites' element={<Favorites/>}></Route>
        <Route exact path='/detail/:detailId' element={<Detail/>}></Route>
        <Route path='*' element={<Error/>}></Route>
      </Routes>
      
    </div>
  );
}

export default App