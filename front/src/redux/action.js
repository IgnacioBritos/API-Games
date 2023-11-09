import axios from 'axios';
import { ADD_ALL_GAMES, ADD_ALL_GENRES, ADD_FILTER, ORDER, GENRES } from './action-types';




//--------------------------------------------------------
export const functionAllGames =()=>{
    const URL = 'http://localhost:3001/videogames'
    return async (dispatch)=>{
        try {
             const {data} = await axios(URL)
             return dispatch({
                type: ADD_ALL_GAMES,
                payload:data
            })  
        } catch (error) {
            console.error('Error al buscar los juegos:', error)
        }
    }
}
//--------------------------------------------------------
export const functionAllGenres =()=>{
    const URL = 'http://localhost:3001/genres'
    return async (dispatch)=>{
        try {
             const {data} = await axios(URL)
             return dispatch({
                type: ADD_ALL_GENRES,
                payload:data
            })  
        } catch (error) {
            console.error('Error al traer los generos:', error)
        }
    }
}
//--------------------------------------------------------
export const fuctionFilterGames=(letras)=>{
    return async (dispatch)=>{
        try {
                return dispatch({
                    type: ADD_FILTER,
                    payload:letras,
                }) 
            
        } catch (error) {
            console.error('Error en el filtrado:', error)
        }
    }
}
//--------------------------------------------------------
export const functionSortOrder = (booleano) =>{
    return async (dispatch ,getState)=>{
    try {
        const {allGames}= getState()
        if(booleano){
            const sortedGames = [...allGames].sort((a, b) => a.name.localeCompare(b.name))
            return dispatch({
                type: ORDER,
                payload: sortedGames,
            })
        }else{
            const sortedGames = [...allGames].sort((a, b) => b.name.localeCompare(a.name))
            return dispatch({
                type: ORDER,
                payload: sortedGames,
            })
        }
    } catch (error) {
        console.error('Error en el ordenamiento', error)
    }
}
}
//--------------------------------------------------------
export const functionSortGenres = (selectedGenre) => {
    return async (dispatch, getState) => {
      try {
        const { allGames } = getState();
        const sortedGames = allGames.filter((game) => {
          return game.genres.includes(selectedGenre);
        });
            return dispatch({
                type: GENRES,
                payload: sortedGames,
            })
        } catch (error) {
            console.error('Error con los genres', error)
        }
    }
    }


