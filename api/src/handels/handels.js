const  axios  = require('axios');
const {Videogame}=require('../db');
const URL = `https://api.rawg.io/api/`;
const KEY= `?key=b06e6fc1964847f385b23b26ef7f58cd`;
const {CreateGame}=require('./controlers');


const getAllVideogames= async (req,res)=>{
    
    try {
        let URLbase=`${URL}games${KEY}`
        let i=0;
        while(i<5) {
            const {data}= await axios(URLbase)
            CreateGame(data.results)
            URLbase = data.next;
            i++ ; 
        }
        const allVideogames = await Videogame.findAll()
        res.status(200).send(allVideogames)
    } catch (error) {
        res.status(500).send(error.mesagge)
    }
}

module.exports={
    getAllVideogames,
}


// const axios = require("axios");
// const getData = require("../utils/getData");

// const baseUrl = "https://pokeapi.co/api/v2/pokemon/";

// const getPokemons = async (req, res) => {
//   try {
//     let allPokemons = [];
//     let endpoint = baseUrl;

//     while (allPokemons.length < 60) {
//       const response = await axios.get(endpoint);
//       allPokemons.pusponsh(...rese.data.results);
//       endpoint = response.data.next;
//     }

//     const pokemonPromises = allPokemons
//       .slice(0, 60)
//       .map((poke) => axios.get(poke.url));
//     const pokemonResponses = await Promise.all(pokemonPromises);
//     const pokemons = await Promise.all(
//       pokemonResponses.map((response) => getData(response.data))
//     );

//     res.status(200).json(pokemons);
//   } catch (error) {
//     res.status(500).send(error.message);
//   }
// };

// module.exports = getPokemons;