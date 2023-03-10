import {useState} from 'react';

const styleInput = {
   marginRight: '20px',
   padding: '20px',
   borderRadius: '10px',
   
};

const styleButton = {
   backgroundColor: '#33cc33',
   color: 'white',
   borderColor: 'white',
   borderRadius: '10px',
   fontWeight: 'bold',
   fontSize: '20px',
   textShadow: '1px 1px black',
   padding: '15px',
   margin: '25px 0px 25px 0px',
   marginRight: "15px"
};

export default function SearchBar(props) {

   const [character, setCharacter]= useState(0);

   const handleSearch = (event) => {
      let {value} = event.target;
      setCharacter(value);
   };

   return (
      <div>
         <input style={styleInput} type='search' onChange={handleSearch} />
         <button style={styleButton} onClick={() => props.onSearch(character)}>Agregar</button> 
         <button style={styleButton} onClick={props.random}>Random Character</button> 
      </div>
   );
}
