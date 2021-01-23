import React from 'react'



const Course = ({source, width, description}) => {
    return (
        <div className="course">
            <div className="image">
                <img src={source} alt="js" width={width}></img>
            </div>
            <p>{description}</p>
            <div className="buttons">
                <button>View details</button>
                <button>Submit Info</button>
            </div>
        </div>
    )
}

export default Course
