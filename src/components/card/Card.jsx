import style from "./Card.module.css"
//import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { addFavorite, deleteFavorite } from "../../redux/actions/actions";
import { connect } from "react-redux";


function Card({ id, name, species, image, gender, onClose, deleteFavorite, addFavorite, myFavorites }) {

   const [isFav, setIsFav] = useState(false);

   const handleFavorite = () => {
      if(isFav){
         setIsFav(false);
         deleteFavorite(id);
      }else {
         setIsFav(true);
         addFavorite({ id, name, species, image, gender, onClose });
      }
   }

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   return (
      <div className={style.container}>
         <div className={style.buttonContainer}>
            {isFav ? (
               <button onClick={handleFavorite} className={style.buttonFav}>❤️</button>
               ) : (
               <button onClick={handleFavorite} className={style.buttonFav}>🤍</button>
            )}
            {isFav ? null : (<button onClick={onClose} className={style.button}>X</button>)}
            
         </div>
         <div className={style.imageContainer}>
            <img src={image} alt="Not Found" /> 
            <Link to={`/detail/${id}`}> <h2 className={style.name}>{name}</h2></Link>
         </div>
         <div className={style.propsContainer}>
            <h2>{species}</h2>
            <h2>{gender}</h2>
         </div>
      </div>
   );
}

const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      addFavorite: (character) => {
         dispatch(addFavorite(character))
      },
      deleteFavorite: (id) => {
         dispatch(deleteFavorite(id))
      },
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
