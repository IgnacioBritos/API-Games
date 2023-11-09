import axios from 'axios';
import { useState,useEffect } from 'react';
import { useParams } from "react-router-dom";
import styles from '../detail/Detail.module.css'
const Detail =()=>{
    const params = useParams();
    const [game,setGame]= useState({});
   
    
    useEffect(()=>{
        axios(`http://localhost:3001/videogames/${params?.id}`)
        .then(({ data }) => {
            if (data.name) {
                setGame(data);
                console.log(data)
            }})
            .catch(()=>{
                window.alert('No hay personajes con ese ID');
            }) 
        },[params?.id])
        
    return(
        <main className={styles.main_detail}>
            <img src={game?.image} alt={game?.name}  className={styles.img_detail}/>
            <section className={styles.info_detail}>
                <h2>{game?.name}</h2>
                <p>{game?.id}</p>
                <p>Rating: {game?.rating}</p>
                <p>Released: {game?.released}</p>
                <p>{game?.description}</p>
                {game?.platafoms && <p>{game?.platafoms.join(' - ')}</p>}
                {game?.genres && <p>{game?.genres.join(' - ')}</p>}
            </section>
        </main>
    )


}

export default Detail