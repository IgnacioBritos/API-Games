import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fuctionFilterGames } from '../../redux/action';

const SearchBar = () => {
    const dispatch = useDispatch();
    const [searchTerm, setSearchTerm] = useState('');
  
    const handleChange = (event) => {
      setSearchTerm(event.target.value);
    }
  
    const handleSubmit = (event) => {
      event.preventDefault();
      dispatch(fuctionFilterGames(searchTerm));
    }
  
    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Buscar juegos..."
          value={searchTerm}
          onChange={handleChange}
        />
        <button type="submit">Buscar</button>
      </form>
    );
  }
  
  export default SearchBar;