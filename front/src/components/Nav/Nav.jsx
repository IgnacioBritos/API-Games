import SearchBar from '../SearchBar/SearchBar'
import Filter from '../filter/Filter'
import {Link} from "react-router-dom";

//style//
import styles from './Nav.module.css'

export default function Nav(){

    return(
        <header className={styles.header}>
            <Link to={`/`}
             >
            <button className={styles.button} >GAMES</button>
            </Link>
            <SearchBar/>
            <Link to={`/newGame`}
             className={styles.button}
            >
            <button className={styles.button_newGame}>New Game</button>
            </Link>
        <div className={styles.filter}>
            <Filter/>
        </div>
            
        </header>
    )



}