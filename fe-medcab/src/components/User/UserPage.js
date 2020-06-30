import React, { useState, useEffect } from 'react';
import axios from 'axios'
import "../../components/User/UserPage.styles.scss"
import { Route, Switch } from "react-router-dom"
import Favorites from './Favorites';
import Strains from './Strains';
import Strain from './Strain';


const UserPage = () =>{

    // const [negative, setNegative] = useState([]);
    // const [positive, setPositive] = useState([]);
    // const [ailment, setAilment] = useState([]);
    // `http://medcabinet1flaskapi.herokuapp.com/${negative}/${positive}/${ailment}`
    

    const [strain, setStrain] = useState([]);
    const [favoriteList, setFavoritesList] = useState([]);
    const getStrain = () =>{
        axios
        .get("https://medcab-backend-test.herokuapp.com/api/auth/strains")
        .then(res => setStrain(res.data)
        )
        .catch(err => console.log(err.response))
    }

    const addToFavorites = strainName => {
        setFavoritesList([...favoriteList, strainName])
    }

    useEffect(()=>{
        getStrain();
    },[])

// const [dropDown, setDropdown] = useState("");

// const getDropdown = () =>{
//    axios.get('http://medcabinet1flaskapi.herokuapp.com').then(res =>{console.log(res)}).catch(err=>(console.log(err)))
// }
// useEffect(()=>{
//     getDropdown();
// },[])


console.log("Strain", strain)
    return(
        <div className= "form_wrapper">
            
        <Favorites favorites={favoriteList} />

            <Switch>
                <Route path="/protected">
                <Strains strains={strain} />  
                </Route>

                <Route path="/stains/:id">
                    <Strain add={addToFavorites} strain={strain} />
                </Route>        
            </Switch>

        </div>
    )
}

export default UserPage;


/*http://medcabinet1flaskapi.herokuapp.com/${}/${}/${} */

