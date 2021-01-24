import React from 'react'
import { useHistory,BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const Course = ({id, source, width, description}) => {
    const history = useHistory();
    const handleDetails = (id) => {
        history.push(`/viewdetails/${id}`);
    }

    const handleSubmitInfo = () => {
        history.push('/submitInfo');
    }

    return (
        <div className="course">
            <div className="image">
                <img src={source} alt="courseImage" width={width}></img>
            </div>
            <p>{description}</p>
            <div className="buttons">
                <button onClick={() => handleDetails(id)}>View details</button>
                <button onClick={handleSubmitInfo}>Submit Info</button>
            </div>
        </div>
    );
}

export default Course