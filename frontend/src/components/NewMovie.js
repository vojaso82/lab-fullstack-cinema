import React, { useEffect, useState } from 'react';
import axios from 'axios';

function NewMovie(props) {

  const [title, setTitle] = useState("");
  const [director, setDirector] = useState("");
  const [stars, setStars] = useState([]);
  const [image, setImage] = useState("");
  const [showTimes, setShowTimes] = useState([]);

    // const addMovie = () => {
    //     axios.post(`http://localhost:5000/addMovie`, { email: 'val', password: 'zooey' }).then(res => console.log(res.data))
    //   }

   const handleChange = (e) => {
        if (e.target.name === "title") {
          setTitle(e.target.value);
        } else if (e.target.name === "director") {
          setDirector(e.target.value);
        } else if (e.target.name === "stars") {
          setStars(e.target.value);
        } else if (e.target.name === "image") {
          setImage(e.target.value);
        } else if (e.target.name === "showTimes"){
          setShowTimes(e.target.value);
        }
      };  
  
      const handleSubmit = async (e) => {
        e.preventDefault();
        const newMovie = {
          title,
          director,
          stars,
          image,
          showTimes
        };

        let res = await axios.post(`http://localhost:5000/addMovie`, newMovie);

        

      }






    return (
        <div>
        <div>
          <form onSubmit={handleSubmit}>
            <label>Title: </label>
            <input onChange={handleChange} type="text" name="title" />
            <br></br>
            <label>Direcor: </label>
            <input onChange={handleChange} type="text" name="director" />
            <br></br>
            <label>Stars: </label>
            <input onChange={handleChange} type="text" name="stars" />
            <br></br>
            <label>Image: </label>
            <input onChange={handleChange} type="text" name="image" />
            <br></br>
            <label>Show times: </label>
            <input onChange={handleChange} type="text" name="showTimes" />
            <br></br>
            <button type="submit">Add Recipe</button>
          </form>
        </div>
        </div>
    )
}

export default NewMovie
