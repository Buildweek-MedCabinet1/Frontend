import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { useParams, useRouteMatch } from 'react-router-dom';


const Strain = (props) =>{

    const {name, id} = props.strain

    const [strain, setStrain] = useState(null);
    const params = useParams();
    const match = useRouteMatch();

    const favoriteStrain = () =>{
        props.addToFavorites(strain)
    }

    const getStrain =(id) => {
        Axios.get(`https://medcab-backend-test.herokuapp.com/api/auth/strains/${id}`).then(res => console.log("Res of getStrain", res.data)).catch(err => console.log(err.response))
    }

    useEffect(() =>{
        getStrain(params.id)
    }, [params.id]);


    if (!strain){
        return <div>Getting Strains...</div>
    }

    return (
        <div className = "strain-page">
            <div className="strain-name">
                <h2>{name}</h2>
                <button onClick={favoriteStrain}>Add to Favorites</button>
            </div>

        </div>
    )
}

export default Strain;