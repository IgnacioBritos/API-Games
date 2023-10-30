import { useState, useEffect } from 'react';
import Card from '../Card/Card';

export default function Cards({ allGames }) {
  const gamesPerPage = 20;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(allGames.length / gamesPerPage);

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const gamesToDisplay = allGames.slice(
    (currentPage - 1) * gamesPerPage,
    currentPage * gamesPerPage
  );

  return (
    <div>
      {currentPage > 1 && (
        <button onClick={() => setCurrentPage(currentPage - 1)}>
          Página anterior
        </button>
      )}
      {currentPage < totalPages && (
         <button onClick={nextPage}>Página siguiente</button>
        
      )}

      {gamesToDisplay.map(({ id, name, image }) => {
        return (
          <Card key={id} id={id} name={name} image={image} />
        );
      })}
    </div>
  );
}







