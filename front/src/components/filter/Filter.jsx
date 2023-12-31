import React, { useEffect, useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { functionSortOrder,functionAllGenres,functionSortGenres} from '../../redux/action';

const Filter=()=>{

    const dispatch =useDispatch();
    const allGenres= useSelector((state)=> state.allGenres)
    const [selectedGenre, setSelectedGenre] = useState('');
    const [order, setOder] = useState(true);

    const handelSortOrder=()=>{
        dispatch(functionSortOrder(order))
        setOder(!order)
    }
    const handleGenreChange = (event) => {
        const newGenre = event.target.value;
        setSelectedGenre(newGenre);
        dispatch(functionSortGenres(newGenre))
    };

    return(
        <div>
           <button onClick={handelSortOrder}>A-Z</button>

           <label>Genres</label>
            <select value={selectedGenre} onChange={handleGenreChange}>
                <option value="">ALL GENRES</option>
                {
                    allGenres.map((genres)=>{
                        return <option key={genres} value={genres}>{genres}</option>
                    })
                }
            </select>   
        </div>
    )


}





export default Filter




