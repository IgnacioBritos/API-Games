import SearchBar from '../SearchBar/SearchBar'
import Filter from '../filter/Filter'
import {Link} from "react-router-dom";

//style//
import styles from './Nav.module.css'

export default function Nav(){

    return(
        <header className={styles.header}>
            <Link to={`/`}
            className={styles.button}
             >
            <button>home</button>
            </Link>

            <SearchBar/>
            <Filter/>
            <Link to={`/newGame`}
             className={styles.button}
            >
            <button>New Game</button>
            </Link>
            
        </header>
    )



}