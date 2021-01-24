import React, { useState, useEffect } from 'react'
import {  useParams, useHistory,BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Data from "../../data.json"
import course from '../../images/course.jpg'

const ViewDetails = () => {   
    let { id } = useParams(); 
    let ID = Number(id);   
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
                <div className="view-details">
                    <div className="ins-img">
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
                            {d.reviews} <span>reviews</span>
                        </div>
                    </div>
                </div>
            )
    });
    return (
           <div>
                {html[ID-1]}
           </div>
        );
}

export default ViewDetails