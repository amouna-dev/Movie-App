import React, { useState } from 'react';
import {movieData} from './Data'
import './App.css';
import MovieList from './components/MovieList'
import Filter from './components/Filter';
import AddMovie from './components/AddMovie';
//import { Modal } from 'react-bootstrap';

function App() {
  const [movies, setMovies] = useState(movieData);
  const [filterTitle, setFilterTitle] = useState("");
  const [filterRating, setFilterRating] = useState(0);
  const [visible, setVisibility] = useState(false);

  const handleClose = () => setVisibility(false);
  //const handleShow = () => setVisibility(true);

  return (
    <div className="App"> 
      
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
    
    </div>
  );
}

export default App;
