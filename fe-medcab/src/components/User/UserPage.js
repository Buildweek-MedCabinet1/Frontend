import React, { useState, useEffect } from 'react';
import axios from 'axios'
import "../../components/User/UserPage.styles.scss"

const UserPage = () =>{

    const [negative, setNegative] = useState([]);
    const [positive, setPositive] = useState([]);
    const [ailment, setAilment] = useState([]);
    const [strain, setStrain] = useState([]);
    // `http://medcabinet1flaskapi.herokuapp.com/${negative}/${positive}/${ailment}`



    const getStrain = () =>{
        axios
        .get("https://medcab-backend-test.herokuapp.com/api/auth/strains")
        .then(res => setStrain(res.data)
        )
        .catch(err => console.log(err.response))
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
       <h1>Hello from UserPage</h1>
    {strain.map(i => 
        {return <div> <h5 className="strainNames"> Strain Name: {i.name} Strain Race:{i.race} </h5> <button>Add to Favorites</button></div>})}
         

         </div>
    )
}

export default UserPage;


/*http://medcabinet1flaskapi.herokuapp.com/${}/${}/${} */

