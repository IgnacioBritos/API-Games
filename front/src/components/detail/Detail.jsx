import axios from 'axios';
import { useState,useEffect } from 'react';
import { useParams } from "react-router-dom";
const Detail =()=>{
    const params = useParams();
    const [game,setGame]= useState({});

    useEffect(()=>{
        axios(`http://localhost:3001/videogames/${params?.id}`)
        .then(({ data }) => {
            if (data.name) {
                setGame(data);
            }})
            .catch(()=>{
                window.alert('No hay personajes con ese ID');
            })    
        },[params?.id])
        
    return(
        <div>
            <h2>{game?.name}</h2>
            <p>{game?.rating}</p>
            <img src={game?.image} alt={game?.name}  width='300px'/>
            <p>{game?.description}</p>
        </div>
    )


}

export default Detail