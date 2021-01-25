import React from 'react'

import Data from "../../data.json"
import course from '../../images/course.jpg'

const ViewDetails = ({id, handleClose}) => {    
    const starC = <span class="fa fa-star checked"></span>;
    const starUC = <span class="fa fa-star"></span>;

    var html = Data.map(d => {
            var elements = [];
            for(let i =0; i <d.rating; i++) {
                elements.push(starC);
            }
            for(let i=0; i<5-d.rating; i++) {
                elements.push(starUC);
            }
            return (
                <div className="popup-box">
                    <div className="box">
                        <span className="close-icon" onClick={handleClose}>x</span>
                        <div className="view-details">
                            <div className="view-details-image">
                                <img src={course} alt="course"/>
                            </div>
                            <div className="right">
                                <div className="about">
                                    <h2>About the {d.name} Course</h2>
                                </div>    
                                <div className="paragraph">
                                    {d.description}
                                </div>
                                <div className="rating">
                                    {elements}
                                    {d.reviews} <span>Reviews</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
    });
    return (
           <div>
                {html[id-1]}
           </div>
        );
}

export default ViewDetails