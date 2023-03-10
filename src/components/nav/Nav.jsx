import SearchBar from "../searchbar/SearchBar";
import style from "./Nav.modules.css";

export default function Nav(props){
    return (
        <nav>
            <img src="https://i2.wp.com/laseptimapantalla.com/wp-content/uploads/2021/09/Rick_and_Morty_-_logo_English.png?fit=622%2C202&ssl=1" alt="Rick&Morty" width="15%" />
            <SearchBar onSearch={props.onSearch} random={props.random} />
        </nav>

    );
}