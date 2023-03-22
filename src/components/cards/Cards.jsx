import Card  from "../card/Card";
import React from "react";
import { DivCards } from "../assets/styledComponents";

export default function Cards(props) {
   const { characters } = props;
   return (
      <DivCards>
         {characters.length === 0 ?
         (<p style={{ color: "lightgreen", marginTop: "150px", fontSize: "30px" }}>
            ¡Busca un personaje!
         </p>)
         :
         (characters.map((e) => (
            <Card
               id={e.id} 
               name={e.name} 
               species={e.species} 
               gender={e.gender} 
               image={e.image} 
               onClose={() => props.onClose(e.id)} 
               key={e.id}
            />
         )))
         }
      </DivCards>
   );
}

