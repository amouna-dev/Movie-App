import React from 'react'
import { Link } from 'react-router-dom'
import {Button} from 'react-bootstrap'
import '../App.css';

const Trailer = () => {
    //const [item, setItem] = useState({})  
    return (
        <div>
            <Button style={{background: "transparent"}} variant="secondary"> 
                <Link className="navlink" exact to="/"> Go Back to Home Page </Link> 
            </Button>
            
        </div>
    );
};

export default Trailer


