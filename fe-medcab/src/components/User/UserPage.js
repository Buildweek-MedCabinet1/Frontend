import React, { useState, useEffect } from 'react';
import axios from 'axios'

const UserPage = () =>{

//     const [negative, setNegative] = useState([]);
//     const [positive, setPositive] = useState([]);
//     const [ailment, setAilment] = useState([]);
//     const [strain, setStrain] = useState(`http://medcabinet1flaskapi.herokuapp.com/${negative}/${positive}/${ailment}`);

//     const getStrain = () =>{
//         axios.get("http://medcabinet1flaskapi.herokuapp.com").then(res => setStrain(res.data)).catch(err => console.log(err.response))
//     }

// useEffect(()=>{
//     getStrain();
// },[])

const [dropDown, setDropdown] = useState("");

const getDropdown = () =>{
   axios.get('http://medcabinet1flaskapi.herokuapp.com').then(res =>{console.log(res)})
}
useEffect(()=>{
    getDropdown();
},[])

    return(
        <div className= "form_wrapper">
       <h1>Hello from UserPage</h1>
       <button>{getDropdown}Hello</button>
         </div>
    )
}

export default UserPage;

/*http://medcabinet1flaskapi.herokuapp.com/${}/${}/${} */

//Testing github