import React from 'react'
import { useHistory,BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const Course = ({id, togglePopUp, source, width, description}) => {
    
    const history = useHistory();

    const handleSubmitInfo = () => {
        history.push('/submitInfo');
    }

    return (
        <div className="course">
            <div className="courseImage">
                <img src={source} alt="courseImage" width={width}></img>
            </div>
            <p>{description}</p>
            <div className="buttons">
                <button onClick={() => togglePopUp(id)}>View details</button>
                <button onClick={handleSubmitInfo}>Submit Info</button>
            </div>
        </div>
    );
}

export default Course