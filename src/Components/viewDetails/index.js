import React, { useState } from 'react'
import { useHistory,BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Data from '../../data.json'
import avatar from '../../images/avatar.jpg'


console.log(Data)

const ViewDetails = () => {    
    // const fetchData = ()=>{
    //     const data = Data.map(data=>{
    //         return(
    //             <div className="view-details">
    //                 <div className="ins-img">
    //                         <img src={data.InstructorImage}/>
    //                 </div>
    //                 <div className="right">
    //                     <div className="about">
    //                         About the Course
    //                     </div>    
    //                     <div className="paragraph">
    //                         {data.Description}
    //                     </div>
    //                     <div className="rating">
    //                         {data.Rating}
    //                     </div>
    //                 </div>
    //             </div>
    //         )
    //     })
    //     return data;
    // }

    return (
        // {fetchData}
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
    )
}


export default ViewDetails
