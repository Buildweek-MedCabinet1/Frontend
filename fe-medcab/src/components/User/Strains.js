import React from 'react'
import { Link } from 'react-router-dom'
import Strain from './Strain'
import { useDispatch, connect } from "react-redux"
import {getStrains} from "../../actions"

// const Strains = ({ strains, isFetching, addToFavorites }) =>{
// console.log(isFetching)
//     return(
//         <div className="strains-list">
//             {isFetching && (<>{strains.map(i => 
//             {return <div onClick={()=> {addToFavorites(i)}
                
//             }>
//                  {/* <h5 className="strainNames"> Strain Name: {i.name} <br/> Strain Race: {i.race} </h5> */}
                 
//             {/* <Link key={i.id} to={`/strains/${i.id}`}> */}
//             Strain Name: {i.name} <br/> Strain Race: {i.race}
//                 {/* <Strain strain={i}/> */}
//             {/* </Link> */}
//              </div>})}</>)}                    
//         </div>
//     )
// }

const Strains = props =>{
    const dispatch = useDispatch();
    const fetchStrains = e =>{
        e.preventDefault();
        dispatch(getStrains())
    }
    console.log("Strains component", props.strains)
    console.log("add to favorites", props.addToFavorites)
    return(
        <div>
            <h1>Medical Cabinet Strains:</h1>
            {props.strains.map(i => 
            {return <div onClick={()=> {props.addToFavorites(i)}
                
            }>
                 {/* <h5 className="strainNames"> Strain Name: {i.name} <br/> Strain Race: {i.race} </h5> */}
                 
            {/* <Link key={i.id} to={`/strains/${i.id}`}> */}
            Strain Name: {i.name} <br/> Strain Race: {i.race}
                {/* <Strain strain={i}/> */}
            {/* </Link> */}
             </div>})}
            <Strain strains={props.strains} addToFavorites={props.addToFavorites}/>
         {/* <button classname="fetch_button" onClick= {fetchStrains}>Strains</button> */}
        </div>
    )
}

const mapStateToProps = state =>{
    console.log("State", state.strains)
    return({
        strains: state.strains,
        error: state.error
    })
}

export default /*connect( mapStateToProps, { getStrains })*/ (Strains); 