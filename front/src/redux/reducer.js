import { ADD_ALL_GAMES, ADD_FILTER, ORDER, ADD_ALL_GENRES, GENRES} from "./action-types";

const initalState ={
    allGames:[
    ],
    filterGames:[
    ],
    allGenres:[
    ],
}

const reducer =(state=initalState,action)=>{
    switch(action.type){
        case ADD_ALL_GAMES:
            return{
                ...state,
                allGames:action.payload
            }
        case ADD_FILTER:
                const letras=action.payload
                const resultado = state.allGames.filter((element) => {
                    const nombre = element.name;
                    const cantLetras= letras.length
                    return nombre && nombre.substring(0,cantLetras).toLowerCase() === letras.substring(0, 3).toLowerCase();
                });
                return {
                    ...state,
                    filterGames: resultado,
                };
            case ADD_ALL_GENRES:
                 return{
                    ...state,
                    allGenres:action.payload
                }
            case ORDER:
                    return {
                    ...state,
                    allGames: action.payload,
                    };   
                
            case GENRES:
                return{
                    ...state,
                    filterGames:action.payload
                }

        default:
            return state; // Devuelve el estado sin cambios por defecto.
    }

}









export default reducer;