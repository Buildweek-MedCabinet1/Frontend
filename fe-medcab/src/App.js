import React, { useState } from 'react';
import './App.css';
import LoginSignup from '../src/components/login-signup/login-signup';
import PrivateRoute from './components/PrivateRoute';
import UserPage from './components/User/UserPage';
import '../src/App.styles.scss'
import Strain from './components/User/Strain';
import { Route, Link } from "react-router-dom";

function App() {

  const [favoriteList, setFavoritesList] = useState([]);
  const [isFetching, setIsFetching] = useState(false)
  const [strain, setStrain] = useState([]);
  
  const addToFavorites = (strain)=> {
    setFavoritesList([...favoriteList, strain])
}
console.log(isFetching)
  return (
   <div className="App">

      <div className="links">
          <a className="link" href='https://stoic-euler-9c6861.netlify.app/'>Home</a>
          <Link className="link" to="/protected">Strains</Link>
          <Link className="link" to="/">Login/Signup</Link>            
      </div>
        
          <Route exact path="/" component={LoginSignup} />
          <PrivateRoute path="/protected">
            <UserPage 
              addToFavorites={addToFavorites} 
              strain={strain} 
              setStrain={setStrain} 
              favoriteList={favoriteList} 
              setIsFetching={setIsFetching} 
              isFetching={isFetching} 
            />
          </PrivateRoute>   
          <PrivateRoute path="/strains/:id">
            <Strain 
              addToFavorites={addToFavorites} 
              strain={strain} setStrain={setStrain} 
              favoriteList={favoriteList} 
              setIsFetching={setIsFetching} 
              isFetching={isFetching} 
            />
          </PrivateRoute>    
        </div> 
 
  );
}

export default App;
