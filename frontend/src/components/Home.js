import React, { useEffect, useState } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import axios from 'axios';

function Home() {






    return (
        <div>
           <Link to= "/movies">
            <button>Check the movies!</button>
           </Link>  
           <Link to= "/movies/create">
            <button>Create movie</button>
           </Link>  
        </div>
    )
}

export default Home
