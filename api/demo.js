const getDetailGame = async (req,res)=>{
try {
    const {id} = req.params
    

    const numberId = Number(id)
    const { data } = await axios();
    const perroEncontrado = data.filter((perro)=>{return perro.id === numberId})
    if(perroEncontrado.length >=1){
    const dogImage = perroEncontrado.map((perro) => {
        return {
          id: perro.id,
          imagen: perro.image.url,
          nombre: perro.name,
          altura: perro.height,
          peso: perro.weight,
          vida: perro.life_span,
          temperamento: perro.temperament
        };
      })
    res.status(200).json(dogImage)}else{

        const foundDog = await Dog.findByPk(id)
        res.status(200).json(foundDog)
    }
} catch (error) {
   res.status(400).json({error: error.message})
};
};