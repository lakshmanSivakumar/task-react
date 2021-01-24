import React, { useState, useEffect } from 'react'
import {  useParams, useHistory,BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Data from "../../data.json"
import avatar from '../../images/avatar.jpg'

const ViewDetails = () => {   
    let { id } = useParams(); 
    let ID = Number(id);   
    console.log(ID);
    return (
           <div className="view-details">
                <div className="ins-img">
                        <img src={avatar}/>
                </div>
                <div className="right">
                    <div className="about">
                        About the Course
                    </div>    
                    <div className="paragraph">
                        The course is completely superb and we got many insights from this course
                    </div>
                    <div className="rating">
                        Rating
                    </div>
                </div>
            </div>
    );
}

export default ViewDetails