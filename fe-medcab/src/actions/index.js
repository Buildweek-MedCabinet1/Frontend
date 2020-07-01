import axiosWithAuth from "../utils/axiosWithAuth";



export const FETCH_STRAINS = 'FETCH_STRAIN';
export const FETCH_STRAINS_SUCCESS = 'FETCH_STRAIN_SUCCESS';
export const FETCH_STRAINS_FAILURE = 'FETCH_STRAIN_FAILURE';




export const getStrains = (strains) => dispatch =>{

    dispatch({
      payload: strains,
      type: FETCH_STRAINS,
               })

  axiosWithAuth()
      .get('/strains')
      .then(res => { 
        console.log(res.data)
        dispatch({ type: FETCH_STRAINS_SUCCESS})     
        })
      .catch(err =>{
          console.log(err.response)
          dispatch({ type: FETCH_STRAINS_FAILURE})
        })
}
