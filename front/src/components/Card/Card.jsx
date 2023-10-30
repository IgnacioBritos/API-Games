import { Link , useLocation } from "react-router-dom";


export default function Card ({id, name, image}){

    return(
        <div>
            <Link to={`/detail/${id}`}>
            <h1>{name}</h1>
            </Link>
            <p>{id}</p>
            <img src={image} alt={name} width="400px" />
        </div>
    )
}