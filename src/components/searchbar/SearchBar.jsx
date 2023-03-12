import {useState} from 'react';
import styles from "./SearchBar.module.css"

export default function SearchBar(props) {

   const [character, setCharacter]= useState(0);

   const handleInputChange = (event) => {
      const {value} = event.target;
      setCharacter(value);
   };

   return (
      <div className={styles.container}>
         <input type='search' onChange={handleInputChange}/>
         <button onClick={() => props.onSearch(character)}>Agregar</button>
         <button className={styles.buttonRandom} onClick={props.random}>Random Card</button>
      </div>
   );
}

