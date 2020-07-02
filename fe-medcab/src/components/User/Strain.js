import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { useParams, useRouteMatch } from 'react-router-dom';


const Strain = (props) =>{

    // const {addToFavorites, isFetching } = props.strain;

    // const [strain, setStrain] = useState([]);
    // const params = useParams();

    // // const favoriteStrain = () =>{
    // //     addToFavorites(strain)
    // // }

    // const getStrain =(id) => {
    //     Axios
    //     .get(`https://medcab-backend-test.herokuapp.com/api/auth/strains/${id}`)
    //     .then(res => setStrain(res.data))
    //     .catch(err => console.log(err.response))
    // }


    // useEffect(() =>{
    //     getStrain(params)
    // }, [params]);


    // if (!strain){
    //     return <div>Getting Strain...</div>
    // }

    // console.log({strain})
    return (
        <div className = "strain-page">
            <h1>{props.strainName}</h1>

            <div className="strain-name">  
{/* 
        //     {console.log(props.strain)}
             
        //         <h2>
        //            { console.log("inside", strain)}
        //         Strain Name: {console.log(strain)} <br/> 
        //         Strain Race: {strain.race}
        //         </h2> */}
                {/* <button onClick={favoriteStrain}>Add to Favorites</button> */}
            </div>

        </div>
    )
}

export default Strain;
