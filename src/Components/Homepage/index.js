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

    for(let i=0; i<4; i++){
        if(i === 0)
            Courses.push(<Course id={i+1} source={javascript} width={100} description="Get upskilled in Vanilla Javascript"/>)
        else if(i === 1)
            Courses.push(<Course id={i+1} source={htmlAndCss} width={190} description="Get upskilled in HTML5 and CSS3"/>)
        else if(i === 2)
            Courses.push(<Course id={i+1} source={nodejs} width={150} description="Get upskilled in Node.js"/>)
        else if(i === 3)
            Courses.push(<Course id={i+1} source={react} width={130} description="Get upskilled in React.js"/>)
    }

    const [prev, setPrev] = React.useState(0);
    const [next, setNext] = React.useState(1);
    const [slide, setSlide] = React.useState([Courses[prev], Courses[next]]);
  
    const clickSelectOptionHandler = (type) => { 
        if(type === 1) {
            if(prev == 2 && next == 3) {
                setPrev(0);
                setNext(1);
            }
            else {
                setPrev(prev+1);
                setNext(next+1);
            }
        }
        if(type === 0) {
            if(prev == 0 && next == 1) {
                setPrev(2);
                setNext(3);
            }
            else {
                setPrev(prev-1);
                setNext(next-1);
            }
        }
        setSlide([Courses[prev], Courses[next]]); 
    }; 

    return (
    <div className="courses">
        <div className="prev">
            <button onClick={() => clickSelectOptionHandler(0)}>{less}</button>
        </div>
        
        {slide}

        <div className="next">
            <button onClick={() => clickSelectOptionHandler(1)}>{greater}</button>
        </div>
    </div>
    );
}

export default HomePage