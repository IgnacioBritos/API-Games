
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import axios from "axios"
import { functionAllGames } from "../../redux/action"

const CreateGames=()=>{
    const dispatch = useDispatch()
    const allGenres = useSelector((state) => state.allGenres);
    const [newGame, setNewGame] = useState({
      name: '',
      released: '',
      rating: '',
      image: '',
      description: '',
      genres: [], // Ahora es un array para múltiples selecciones
    });

    
    const handleChange = (event) => {
        const { name, value, type } = event.target;
    
        if (type === 'text' || type === 'number') {
          setNewGame({
            ...newGame,
            [name]: value,
          });
        } else if (type === 'checkbox') {
          if (newGame.genres.includes(value)) {
            setNewGame({
              ...newGame,
              genres: newGame.genres.filter((genre) => genre !== value),
            });
          } else {
            setNewGame({
              ...newGame,
              genres: [...newGame.genres, value],
            });
          }
        }
        console.log(newGame)
      };
    
      const handleSubmit = (event) => {
        event.preventDefault();
        axios
        .post('http://localhost:3001/videogames/', newGame)
        .then((response) => {
            dispatch(functionAllGames());
        })
        .catch((error) => {
            console.error('Error al enviar el juego:', error);
        });
      };

    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor="">name:</label>
            <input 
             type="text"
             name="name" 
             value={newGame.name} 
             onInput={handleChange} 
            />

            <label htmlFor="">released:</label>
            <input 
             type="text"
             name="released" 
             value={newGame.released} 
             onInput={handleChange} 
            />

            <label htmlFor="">rating:</label>
            <input 
             type="number"
             name="rating" 
             value={newGame.rating} 
             onInput={handleChange} 
            />

            <label htmlFor="">image:</label>
            <input 
             type="text"
             name="image" 
             value={newGame.image} 
             onInput={handleChange} 
            />

            <label htmlFor="">description:</label>
            <input 
             type="text"
             name="description" 
             value={newGame.description} 
             onInput={handleChange} 
            />

            <label htmlFor="genres">Géneros:</label>
                {allGenres.map((genre) => (
                    <div key={genre}>
                    <input
                        type="checkbox"
                        name="genres"
                        value={genre}
                        checked={newGame.genres.includes(genre)}
                        onChange={handleChange}
                    />
                    <label>{genre}</label>
                    </div>
                ))}


            <button
                    type="submit"
                    disabled={
                    !newGame.name ||
                    !newGame.released ||
                    !newGame.rating ||
                    !newGame.image ||
                    !newGame.description ||
                    newGame.genres.length === 0 
                    }
            >SUBMIT</button>

        </form>
    )
}
export default CreateGames;