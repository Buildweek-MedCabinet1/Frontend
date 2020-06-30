import React, { useState, useEffect } from 'react';
import axios from 'axios'
import "../../components/User/UserPage.styles.scss"
import { Route, Switch } from "react-router-dom"
import Favorites from './Favorites';
import Strains from './Strains';
import Strain from './Strain';


const UserPage = ({addToFavorites, strain, setStrain, isFetching, setIsFetching, favoriteList}) =>{

    // const [negative, setNegative] = useState([]);
    // const [positive, setPositive] = useState([]);
    // const [ailment, setAilment] = useState([]);
    // `http://medcabinet1flaskapi.herokuapp.com/${negative}/${positive}/${ailment}`
    


   
   const getStrain = () =>{
        axios
        .get("https://medcab-backend-test.herokuapp.com/api/auth/strains")
        .then(res => {       console.log(res)
            setStrain(res.data)
            setIsFetching(true)}
            
         
 
        )
        .catch(err => console.log(err.response))
    }

   useEffect(async ()=>{
   getStrain();
    },[])

// const [dropDown, setDropdown] = useState("");

// const getDropdown = () =>{
//    axios.get('http://medcabinet1flaskapi.herokuapp.com').then(res =>{console.log(res)}).catch(err=>(console.log(err)))
// }
// useEffect(()=>{
//     getDropdown();
// },[])
console.log(isFetching)
console.log(favoriteList)
console.log("Strain", strain)
    return(
        <div className= "form_wrapper">
                <Favorites favorites={favoriteList} />
                <Strains strains={strain} isFetching={isFetching} addToFavorites={addToFavorites} />       
        </div>
    )
}

export default UserPage;


/*http://medcabinet1flaskapi.herokuapp.com/${}/${}/${} */

