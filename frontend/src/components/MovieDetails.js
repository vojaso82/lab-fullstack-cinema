import React, { useEffect, useState } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import axios from 'axios';



function MovieDetails(props) {
   //console.log(props)
   const [movie, setMovie] = useState(null);

   useEffect(async() => {
    
    let res = await axios.get(`http://localhost:5000/movies/${props.match.params.id}`)
    setMovie(res.data)
    
    
   
    
   }, movie)

   console.log(movie)

    return (
        <>
        {movie &&
        <div>
            
            <button onClick={()=> props.history.push("/movies") }>Go Back</button>
            <div>
                <img src={movie.image}/>
            </div>
            <div>
                <h2> {movie.title} </h2>
                <h3> {movie.director} </h3>
                <ul>Stars
                {movie.stars.map((eachStar) => {
                    return(
                        <li> {eachStar} </li>
                    )
                })}
                </ul>
            </div>
        </div>
    
    
        }
         </>   
    )
}

export default MovieDetails
