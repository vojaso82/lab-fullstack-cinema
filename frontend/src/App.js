import logo from './logo.svg';
import './App.css';
import { Route, Switch, Link } from 'react-router-dom';
import AllMovies from './components/AllMovies';
import Home from './components/Home';
import MovieDetails from './components/MovieDetails';

function App() {
  return (
    <div className="App">
     <Switch>

     <Route exact path = "/" render = {props => < Home {...props} /> }/>  
     <Route exact path = "/movies" render = {props => < AllMovies {...props} /> }/>
     <Route exact path = "/movies/:id" render = {props => < MovieDetails {...props} /> }/> 

     </Switch>
    </div>
  );
}

export default App;
