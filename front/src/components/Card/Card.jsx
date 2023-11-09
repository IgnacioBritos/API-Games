import { Link , useLocation } from "react-router-dom";
import { useDispatch } from 'react-redux';
import styles from '../Card/Card.module.css'


export default function Card ({id,genres, name, image}){
    return(
        <article className={styles.container} >
            <Link to={`/detail/${id}`}>
            <h2 className={styles.title_card} >{name}</h2>
            </Link>
            <div>
                {genres.map((genre)=>{
                    return <p 
                    className={styles.genres_card} 
                    >  {genre}  </p>
                })}
            </div>
            <img src={image} alt={name}  className={styles.img_card}/>
        </article>
    )
}