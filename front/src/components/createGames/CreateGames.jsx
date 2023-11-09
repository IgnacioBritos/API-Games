
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import axios from "axios"
import { functionAllGames } from "../../redux/action"
import styles from '../createGames/CreateGames.module.css'

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
    
        if (type === 'text' || type === 'number' || type==="url") {
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
    
      };
    
      const handleSubmit = (event) => {
        event.preventDefault();
        axios
        .post('http://localhost:3001/videogames/', newGame)
        .then((response) => {
            dispatch(functionAllGames());
            setNewGame({
              name: '',
              released: '',
              rating: '',
              image: '',
              description: '',
              genres: [],
            });
        })
        .catch((error) => {
            console.error('Error al enviar el juego:', error);
        });
      };

    return(
       <form onSubmit={handleSubmit}
        className={styles.formContainer}>
          <div className={styles.inputsContainer}>

            <label htmlFor="">NAME</label>
            <input 
             type="text"
             name="name" 
             value={newGame.name} 
             onInput={handleChange} 
            />

            <label htmlFor="">RELEASED</label>
            <input 
             type="text"
             name="released" 
             value={newGame.released} 
             onInput={handleChange} 
            />

            <label htmlFor="">RANTING</label>
            <input 
             type="number"
             name="rating" 
             value={newGame.rating} 
             onInput={handleChange} 
            />

            <label htmlFor="">IMAGE</label>
            <input 
             type="url"
             name="image" 
             value={newGame.image} 
             onInput={handleChange} 
            />

            <label htmlFor="">DESCRIPTION</label>
            <input 
             type="text"
             name="description" 
             value={newGame.description} 
             onInput={handleChange} 
            />
        </div>

        <div className={styles.checkboxContainer}>
          <label className={styles.inputLabel} htmlFor="genres">Género</label>
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
        </div>

            <button
            className={styles.submitButton}
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