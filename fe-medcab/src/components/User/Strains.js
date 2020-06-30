import React from 'react'
import { Link } from 'react-router-dom'
import Strain from './Strain'

const Strains = ({ strains, isFetching, addToFavorites }) =>{
console.log(isFetching)
    return(
        <div className="strains-list">
            {isFetching && (<>{strains.map(i => 
            {return <div onClick={()=> {addToFavorites(i)}
                
            }>
                 {/* <h5 className="strainNames"> Strain Name: {i.name} <br/> Strain Race: {i.race} </h5> */}
                 
            {/* <Link key={i.id} to={`/strains/${i.id}`}> */}
            Strain Name: {i.name} <br/> Strain Race: {i.race}
                {/* <Strain strain={i}/> */}
            {/* </Link> */}
             </div>})}</>)}                    
        </div>
    )
}

export default Strains; 