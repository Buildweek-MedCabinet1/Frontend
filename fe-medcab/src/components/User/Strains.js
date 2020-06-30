import React from 'react'

const Strains = ({ strains }) =>{
    return(
        <div className="strains-list">
            {strains.map(i => 
            {return <div> <h5 className="strainNames"> Strain Name: {i.name} <br/> Strain Race: {i.race} </h5> </div>})}                    
        </div>
    )
}

export default Strains; 