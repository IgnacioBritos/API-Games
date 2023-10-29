const {Videogame}=require('../db');
const axios= require('axios')
const URL = `https://api.rawg.io/api`;
const KEY= `?key=b06e6fc1964847f385b23b26ef7f58cd`;
//getAllVideogames
async function ALLVIDEOGAMES(URLbase) {
    let i = 0;
    const ALLGAMES = [];
    while (i < 5) {
        const { data } = await axios(URLbase);
        data.results.map((juegos) => {
            const game = {
                id: juegos.id,
                name: juegos.name,
                rating: juegos.rating,
                released: juegos.released,
                image: juegos.background_image,
                platafoms: juegos.platforms.map((platafom) => platafom.platform.name),
            };
            ALLGAMES.push(game);
        });
        URLbase = data.next;
        i++;
    }
    const games = await Videogame.findAll();

    games.forEach((game) => {
        ALLGAMES.push({
            id: game.id,
            name: game.name,
            rating: game.rating,
            released: game.released,
            image: game.image,
            platafoms: game.platafoms,
        });
    });
    return ALLGAMES;
}
//getDetailGame
const DETAILVIDEOGAMES=(data)=>{
    const game ={
        name: data.name,
        rating: data.rating,
        released:data.released,
        image: data.background_image,
        description:data.description,
        platafoms: data.platforms.map((platafom) => platafom.platform.name),
        }
    return game
}


//SEARCHAPI//
function filtro(arr, letras) {
    const resultado = arr.filter((element) => {
        const nombre = element.name;
        return nombre && nombre.substring(0, 3).toLowerCase() === letras.substring(0, 3).toLowerCase();
    });

    return resultado;
}


const SEARCHAPI = async (searchTerm) => {
    const URLbase = `${URL}/games${KEY}`;
    const allgames = await ALLVIDEOGAMES(URLbase);
    const search = filtro(allgames, searchTerm);
    return search;
}


module.exports={
    ALLVIDEOGAMES,
    DETAILVIDEOGAMES,
    SEARCHAPI
}