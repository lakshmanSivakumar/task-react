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
    let prev=0,next=4
    let data = []
    for(let i=0;i<12;i++){
        Courses.push(<Course id={i+1} source={htmlAndCss} width={190} description="Get upskilled in HTML5 and CSS3"/>)
    }
    for(let i=prev;i<next;i++){
        data.push(Courses[i]);
    }
    const handleClick = (type) =>{
        if(type){
            prev = prev-1;next=next-1;
        }
        else{
            prev=prev+1;next=next+1;
        }
        data = [];
        for(let i=prev;i<next;i++){
            data.push(Courses[i]);
        }
        console.log(data);
    }
    return (
    <div className="courses">
        <div className="prev">
            <button onClick={()=>handleClick(0)}>{less}</button>
        </div>
        {/* <Course id={1} source={htmlAndCss} width={190} description="Get upskilled in HTML5 and CSS3"/>
        <Course id={2} source={nodejs} width={150} description="Get upskilled in Node.js"/>
        <Course id={3} source={javascript} width={110} description="Get upskilled in Vanilla Javscript"/>
        <Course id={4} source={react} width={120} description="Get upskilled in React.js"/> */}
        {data}
        <div className="next">
            <button onClick={()=>handleClick(1)}>{greater}</button>
        </div>
    </div>
    );
}

export default HomePage