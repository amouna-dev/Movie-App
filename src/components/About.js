import React from 'react';
import { Link } from 'react-router-dom'
import {Button} from 'react-bootstrap'
import '../App.css';

const About = () => {
    return (
        <div>
           <Button style={{background: "transparent"}} variant="secondary"> 
                <Link className="navlink" exact to="/"> Go Back to Home Page </Link> 
            </Button>

            <h2 style={{margin: "30px 0"}}> About </h2>
            <p style={{padding: "50px"}}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo temporibus ut corrupti, 
                iste harum autem, consectetur pariatur vel eum reprehenderit esse perferendis
                veniam fugiat a culpa nobis, beatae odio repellat? 
            </p>
 
        </div>
    );
}

export default About;