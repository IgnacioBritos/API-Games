import { useState, useEffect } from 'react';
import Card from '../Card/Card';
import styles from '../Cards/Cards.module.css'

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
    <main className={styles.container_cards}>
      {currentPage > 1 && (
        <button onClick={() => setCurrentPage(currentPage - 1)}
        className={styles.button_right}
        >
          anterior
        </button>
      )}
      {currentPage < totalPages && (
         <button onClick={nextPage}
         className={styles.button_left}
         >siguiente</button>
        
      )}

      {gamesToDisplay.map(({ id, genres, name, image }) => {
        return (
          <Card key={id} id={id} genres={genres} name={name} image={image} />
        );
      })}
    </main>
  );
}







