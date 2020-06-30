import React from 'react';
import { NavLink } from 'react-router-dom';
import "../../components/User/favorites.styles.scss"


const Favorites = ({ favorites }) =>{
    console.log("favorites", favorites)
    return (
        <div className="favorites-list">
            <h3> Your Favorites: </h3>
            {favorites.map(strainName =>{
                console.log({strainName})
                return(
                    <NavLink to={`/strains/${strainName.id}`} key={strainName.id} className="favorite-current">
                       <span className="favorite-strain">{strainName.name}</span> 
                    </NavLink>
                    
                );
            })}

        </div>
    )
}

export default Favorites;