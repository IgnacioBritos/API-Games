require('dotenv').config();

const  axios  = require('axios');
const {Videogame}=require('../db');
const URL = `https://api.rawg.io/api`;
const {ALLVIDEOGAMES,DETAILVIDEOGAMES,SEARCHAPI}=require('./controlers');
const {
    KEY
  } = process.env;
  
//----------------- GET | /videogames**-----------------
const getAllVideogames= async (req,res)=>{
    try {
        let URLbase=`${URL}/games${KEY}`;
        res.status(200).send(await ALLVIDEOGAMES(URLbase))
    } catch (error) {
        res.status(404).send(error.mesagge)
    }
}
//-------------------- GET | /videogames/:idVideogame----------------------------//
const getDetailGame = async (req, res) => {
    try {
        const { id } = req.params;
       if (isNaN(id)) {
           const detailGame = await Videogame.findByPk(id);
            console.log(detailGame)
            res.status(200).json(detailGame);
    } else {
            const apiResponse = await axios.get(`${URL}/games/${id}${KEY}`);
            const data = apiResponse.data;
            res.status(200).send(DETAILVIDEOGAMES(data));
    } 
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
};


//--------------------POST | /videogames---------------------------------//
const postVideogames = async(req,res)=>{
    try {
        const game =req.body;
        const newVideogames = await Videogame.create(game);
        res.status(200).json(newVideogames)
    } catch (error) {
        res.status(400).send({error:error.mesagge})
    }
}


//---------------- GET | /videogames/name----------------------------------//
const getGamesName = async(req,res)=>{
    try {
    const searchTerm = req.query.name;
    const apiResults = await SEARCHAPI(searchTerm);
    if (apiResults.length === 0) {
        return res.status(404).json({ message: "No se encontraron videojuegos" });
    }
      res.status(200).json(apiResults);
    } catch (error) {
        res.status(400).send({error:error.mesagge}) 
    }
}

//------------------GET | /genres**-----------------------//

const getGenres=async(req,res)=>{
    try {
        const {data} = await axios(`${URL}/genres${KEY}`)
        const genres = data.results.map((gener)=>gener.name)
        res.status(200).json(genres)
    } catch (error) {
        res.status(400).send({error:error.mesagge}) 
    }
}



module.exports={
    getAllVideogames,
    getDetailGame,
    postVideogames,
    getGamesName,
    getGenres
}
