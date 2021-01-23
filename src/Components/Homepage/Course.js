import React from 'react'
import { useHistory,BrowserRouter as Router, Switch, Route } from 'react-router-dom';


const Course = ({source, width, description}) => {
    const history = useHistory();

    const handleDetails = () => {
        history.push("/viewdetails");
    }

    return (
        <div className="course">
            <div className="image">
                <img src={source} alt="js" width={width}></img>
            </div>
            <p>{description}</p>
            <div className="buttons">
                <button onClick={handleDetails()}>View details</button>
                <button>Submit Info</button>
            </div>
        </div>
    )
}


export default Course
