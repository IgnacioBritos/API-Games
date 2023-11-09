import { Link , useLocation } from "react-router-dom";
import styles from '../Card/Card.module.css'


export default function Card ({id, name, image}){

    return(
        <article className={styles.container} >
            <Link to={`/detail/${id}`}>
            <h2>{name}</h2>
            </Link>
            <p>{id}</p>
            <img src={image} alt={name}  className={styles.img_card}/>
        </article>
    )
}