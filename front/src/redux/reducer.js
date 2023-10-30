import { ADD_ALL_GAMES } from "./action-types";

const initalState ={
    allGames:[
    ]
}

const reducer =(state=initalState,action)=>{
    switch(action.type){
        case ADD_ALL_GAMES:
            return{
                ...state,
                allGames:action.payload
            }


        default:
            return state; // Devuelve el estado sin cambios por defecto.
    }

}









export default reducer;