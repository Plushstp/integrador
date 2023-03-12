import Card from '../card/Card';
import styled from 'styled-components';

const DivCards = styled.div `
   display: flex;
   justify-content: space-evenly;
`;

export default function Cards(props) {
   const { characters } = props;
   let i=0;
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
               key={i++}
            />
         )))
         }
      </DivCards>
   );
}

/*const DivCards = styled.div `
   display: flex;
   justify-content: space-evenly;
   padding: 5px;
   width: screen;
   margin: auto;
   height: full;
   overflow: hidden;
`;

export default function Cards(props) {
   const { characters } = props;
   let i = 0;
   return (
      <DivCards>
         {characters.map((element) => (
            <Card 
               name={element.name} 
               species={element.species} 
               gender={element.gender} 
               image={element.image} 
               onClose={() => props.onClose(element.id)} 
               key={i++}
            />
         ))}
      </DivCards>
   );
}*/

