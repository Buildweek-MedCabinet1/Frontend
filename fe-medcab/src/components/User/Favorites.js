import React from 'react';
import { Link } from 'react-router-dom';
import "../../components/User/favorites.styles.scss"
import Strain from './Strain';



const Favorites = ({ favorites }) =>{
    console.log("favorites", favorites)
    return (
        <div className="favorites-list">
            <h3> Your Favorites:  </h3>
            {favorites.map(strainName =>{
                console.log({strainName})
                return(
                    <h4>{strainName.name}</h4>
                    // <Link to={`/strains/${strainName.id}`} key={strainName.id} className="favorite-current">
                      /* <Strain /> */
                    // </Link>
                    
                );
            })}

        </div>
    )
}

export default Favorites;