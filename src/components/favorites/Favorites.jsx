import { connect }  from "react-redux";
import Card from "../card/Card";
import { DivCards } from "../assets/styledComponents";

function Favorites ({ myFavorites }) {
    return(
        <DivCards>
            {myFavorites?.map(({ id, name, species, image, gender }) => (
                <Card id={id} name={name} species={species} image={image} gender={gender} />
            ))}
        </DivCards>
    );
}

const mapStateToProps = (state) => {
    return {
        myFavorites: state.myFavorites,
    };
};

export default connect(mapStateToProps, null)(Favorites);