import logo from './logo.svg';
import './App.css';
import { Route, Switch, Link } from 'react-router-dom';
import AllMovies from './components/AllMovies';
import Home from './components/Home';
import MovieDetails from './components/MovieDetails';
import NewMovie from './components/NewMovie';


function App() {
  return (
    <div className="App">
     <Switch>

     <Route exact path = "/" render = {props => < Home {...props} /> }/>  
     <Route exact path = "/movies" render = {props => < AllMovies {...props} /> }/>
     <Route exact path = "/movies/:id" render = {props => < MovieDetails {...props} /> }/> 
     <Route exact path = "/movies/create" render = {props => < NewMovie {...props} /> }/> 
     </Switch>
    </div>
  );
}

export default App;
