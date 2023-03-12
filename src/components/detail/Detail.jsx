import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import style from "./Detail.module.css"

const textos = { backgroundColor: "green", color: "lightgreen", borderRadius: "5px" };
const info = { textAlign: "left", fontSize: "24px", color: "green", backgroundColor: "lightgreen"} ;
const image = { borderRadius: "10px", border: "3px solid green" };

export default function Detail() {

    const {detailId} = useParams();

    const [character, setCharacter] = useState({
        name: '',
        status: '',
        specie: '',
        gender: '',
        origin: '',
        image: '',
    });

    const navigate = useNavigate();

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
          .then((response) => response.json())
          .then((char) => {
            if (char.name) {
              setCharacter({
              name: char.name,
              status: char.status,
              specie: char.specie,
              gender: char.gender,
              origin: char.origin.name,
              image: char.image,
            });
            } else {
              window.alert("No hay personajes con ese ID");
            }
          })
          .catch((err) => {
            window.alert("No hay personajes con ese ID");
          });
        return setCharacter({});
      }, [detailId]);

    return (
        <div>
            <div className={style.container}>
                <div style={info}>
                    {character.name &&(
                        <p>
                            <b style={textos}>Name:</b> {character.name}
                        </p>
                    )}
                    {character.status &&(
                        <p>
                            <b style={textos}>Status:</b> {character.status}
                        </p>
                    )}
                    {character.specie &&(
                        <p>
                            <b style={textos}>Specie:</b> {character.specie}
                        </p>
                    )}
                    {character.gender &&(
                        <p>
                            <b style={textos}>Gender:</b> {character.gender}
                        </p>
                    )}
                    {character.origin &&(
                        <p>
                            <b style={textos}>Origin:</b> {character.origin}
                        </p>
                    )}
                </div>
                <img style={image} src={character.image} alt="Not found"/>
            </div>
            <button className={style.styleButton} onClick={()=>navigate('/home')}>Back</button>                       
        </div>
    );
}