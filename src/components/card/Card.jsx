import style from "./Card.module.css"
//import styled from "styled-components";
import {Link} from "react-router-dom";

export default function Card(props) {
   return (
      <div className={style.container}>
         <div className={style.buttonContainer}>
            <button onClick={props.onClose} className={style.button}>X</button>
         </div>
         <div className={style.imageContainer}>
            <img src={props.image} alt="Not Found" /> 
            <Link to={`/detail/${props.id}`}> <h2 className={style.name}>{props.name}</h2></Link>
         </div>
         <div className={style.propsContainer}>
            <h2>{props.species}</h2>
            <h2>{props.gender}</h2>
         </div>
      </div>
   );
}

/*const DivCard = styled.div `
   display: inline-block;
   background-color: #ecffe6;
   border-radius: 20px;
   border: solid #33cc33;
   color: #00994d;
   overflow: hidden;
   width: 20em;
   height: 29em;
   margin: 25px 0px 25px 0px;
`;

const Button = styled.button `
   position: relative;
   top: 0px;
   left: 200px; 
   background-color: #ff4d4d;
   color: white;
   text-shadow: 1px 1px black;
   border-radius: 5px;
   border: 0px;
   width: 25px;
   height: 25px;
   font-size: 20px;
   font-weight: bold;
`;

const styleName = {
   display: 'inline-block',
   position: 'relative',
   top: '350px',
   right: '70px',
   padding: '5px',
   backgroundColor: 'rgb(0,0,0,0.5)',
   color: 'white',
   
}

const styleSpecies = {
   display: 'inline-block',
   position: 'relative',
   top: '350px',
   right: '0px',
   fontSize: '20px',
   color: '#00994d',
   marginRight: '15px',
   marginTop: '-10px',
}

const styleGender = {
   display: 'inline-block',
   position: 'relative',
   top: '350px',
   right: '0px',
   fontSize: '20px',
   color: '#00994d',
   marginTop: '-10px',
}

export default function Card(props) {
   return (
      <DivCard>
         <Button onClick={props.onClose}>X</Button>
         <h2 style={styleName}>{props.name}</h2>
         <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
            <h2 style={styleSpecies}>{props.species}</h2>
            <h2 style={styleGender}>{props.gender}</h2>
         </div>
         <img  src={props.image} alt="Not Found" /> 
      </DivCard>
   );
}*/
