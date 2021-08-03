import React, { useState } from 'react';
import {movieData} from './Data'
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MovieList from './components/MovieList'
import Filter from './components/Filter';
import AddMovie from './components/AddMovie';
import About from './components/About';
import Trailer from './components/Trailer';
import MovieTrailer from './components/MovieTrailer';
//import { Modal } from 'react-bootstrap';

function App() {
  const [movies, setMovies] = useState(movieData);
  const [filterTitle, setFilterTitle] = useState("");
  const [filterRating, setFilterRating] = useState(0);
  const [visible, setVisibility] = useState(false);

  const handleClose = () => setVisibility(false);
  //const handleShow = () => setVisibility(true);

  return (
    <BrowserRouter>
    
    <div className="App"> 
      <React.StrictMode>
       <Switch> 
      <Route exact={true} path="/" render={() => (
        <>
        <div className="header">
        <Filter setFilterTitle={setFilterTitle} setFilterRating={setFilterRating} filterRating={filterRating} />
      </div>
      <div className="add">
        <button className= "btn-add" onClick={() => 
        setVisibility(!visible)
        }> Add Movie </button>
      
      { visible? 
      <AddMovie movies={movies} setMovies={setMovies} visible={visible} handleClose={handleClose}/> : null
      }
      </div>
      {/* <div className="add">
        <button className= "btn-add" onClick={handleShow}>
          Add Movie
        </button>
        
        <Modal show= {visible} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Adding Movie</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <AddMovie movies={movies} setMovies={setMovies} />
          </Modal.Body>
        </Modal>
        
      </div> */}
      <MovieList movies= {movies} filterTitle={filterTitle} filterRating={filterRating} />
   
    </>
      )} />

      <Route path="/about" component={About} />
      <Route path="/trailer" component={Trailer} />
      <Route path="/:id" component={MovieTrailer} />
    </Switch>
       </React.StrictMode>
    </div> 
    
    </BrowserRouter>
  );
}

export default App;