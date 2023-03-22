import React from "react";
import SearchBar from "../searchbar/SearchBar";
import style from "./Nav.module.css";
import { Link } from "react-router-dom";

export default function Nav(props){
    return (
        <nav className={style.nav}>
            <img src="https://i2.wp.com/laseptimapantalla.com/wp-content/uploads/2021/09/Rick_and_Morty_-_logo_English.png?fit=622%2C202&ssl=1" alt="Rick&Morty" width="10%" />
            <div>
                <Link to='/home' className={style.links}>Home</Link>
                <Link to='/about' className={style.links}>About</Link>
                <Link to='/favorites' className={style.links}>Favorites</Link>
                <button className={style.button} onClick={props.logout}>LOGOUT</button>
            </div>
            <SearchBar onSearch={(characterID) => props.onSearch(characterID)} random={props.random}/>
        </nav>
    );
}