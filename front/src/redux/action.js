import axios from 'axios';
import { ADD_ALL_GAMES } from './action-types';

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
            console.error('Error al agregar favorito:', error)
        }
    }
}