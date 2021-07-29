import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import {Rating} from '@material-ui/lab';


const Filter = ({setFilterTitle, FilterRating, setFilterRating}) => {
    return (
        <div>
             <Navbar className="header" variant="dark" >
                <Container>
                <Navbar.Brand href="#">Movies List </Navbar.Brand>
                <Nav className="me-auto">
                </Nav>
                <input className="search" type="search" placeholder="Search..." onChange={(e) =>
                    setFilterTitle(e.target.value)
                } />
                </Container>
                <Rating
                    name="simple-controlled"
                    value={FilterRating}
                    onChange={(event, newValue) => {
                        setFilterRating(newValue);
                    }}
                    />
            </Navbar>
        </div>
    );
};

export default Filter;