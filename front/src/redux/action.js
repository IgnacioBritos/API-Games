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
            console.error('Error al buscar juegos:', error)
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
            console.error('Error al buscar juegos:', error)
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
            console.error('Error:', error)
        }
    }
}
//--------------------------------------------------------
export const functionSortOrder = () =>{
    return async (dispatch ,getState)=>{
    try {
        const {allGames}= getState()
        const sortedGames = [...allGames].sort((a, b) => a.name.localeCompare(b.name))
        return dispatch({
            type: ORDER,
            payload: sortedGames,
        })
    } catch (error) {
        console.error('Error en el ordenamiento', error)
    }
}
}
//--------------------------------------------------------
export const functionSortGenres=(genres)=>{

    return async (dispatch ,getState)=>{
        try {
            const {allGames}= getState()
            const sortedGames= allGames.filter((game)=>{return game.genres==genres})
            return dispatch({
                type: GENRES,
                payload: sortedGames,
            })
        } catch (error) {
            console.error('Error en el ordenamiento', error)
        }
    }
    }


