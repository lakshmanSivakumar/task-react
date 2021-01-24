import React from 'react'
import { useHistory,BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Course from './Course'

import javascript from '../../images/javascript.png'
import htmlAndCss from '../../images/htmlAndCss.png'
import nodejs from '../../images/nodejs.png'
import react from '../../images/react.jpg'

const HomePage = () => {

    const Courses = [];
    const less = '<';
    const greater = '>';
    let prev=0,next=2;
    let data = []

    for(let i=0; i<4; i++){
        if(i === 0)
            Courses.push(<Course id={i+1} source={javascript} width={100} description="Get upskilled in Vanilla Javascript"/>)
        else if(i === 1)
            Courses.push(<Course id={i+1} source={htmlAndCss} width={190} description="Get upskilled in HTML5 and CSS3"/>)
        else if(i === 2)
            Courses.push(<Course id={i+1} source={nodejs} width={100} description="Get upskilled in Node.js"/>)
        else if(i === 3)
            Courses.push(<Course id={i+1} source={react} width={100} description="Get upskilled in React.js"/>)
    }

    for(let i=prev; i<next; i++){
        data.push(Courses[i]);
    }

    const handleClick = (type) =>{
        if(type === 1) {
            prev += 1;
            next += 1;
        }
        else if(type === 0) {
            prev -= 1;
            next -= 1;
        }
        data = [];
        for(let i=prev; i<next; i++){
            data.push(Courses[i]);
        }
        console.log(data);
    }

    return (
    <div className="courses">
        <div className="prev">
            <button onClick={()=>handleClick(0)}>{less}</button>
        </div>
        
        {data}

        <div className="next">
            <button onClick={()=>handleClick(1)}>{greater}</button>
        </div>
    </div>
    );
}

export default HomePage