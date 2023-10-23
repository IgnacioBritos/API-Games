const {Videogame}=require('../db');

const CreateGame =(data)=>{
   data.map(async(juego)=>{
        const {name,background_image,released,rating}=juego
        await Videogame.create({name,background_image,released,rating})
    })
}

module.exports={
    CreateGame,

}