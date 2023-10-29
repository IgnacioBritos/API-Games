const { Router } = require('express');
const {getAllVideogames,getDetailGame, postVideogames,getGamesName,getGenres}= require('../handels/handels')



const router = Router();

router.get('/videogames',getAllVideogames);

router.get('/videogames/:id',getDetailGame);

router.get("/name", getGamesName)// /name?name=nombre

router.get('/genres',getGenres)

router.post('/videogames', postVideogames);


module.exports = router;
