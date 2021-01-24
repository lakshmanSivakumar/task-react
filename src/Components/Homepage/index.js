import React from 'react'
import Course from './Course'

import javascript from '../../images/javascript.png'
import htmlAndCss from '../../images/htmlAndCss.jpg'
import nodejs from '../../images/nodejs.png'
import react from '../../images/react.jpg'

const HomePage = () => {
    let width = window.innerWidth;

    const Courses = [];
    const less = '<';
    const greater = '>';
    let temp = [];

    for(let i=0; i<4; i++) {
        if(i === 0)
            Courses.push(<Course id={i+1} source={javascript} width={100} description="Get upskilled in Vanilla Javascript"/>)
        else if(i === 1)
            Courses.push(<Course id={i+1} source={htmlAndCss} width={200} description="Get upskilled in HTML5 and CSS3"/>)
        else if(i === 2)
            Courses.push(<Course id={i+1} source={nodejs} width={140} description="Get upskilled in Node.js"/>)
        else if(i === 3)
            Courses.push(<Course id={i+1} source={react} width={120} description="Get upskilled in React.js"/>)
    }
    const [prev, setPrev] = React.useState(0);
    const [next, setNext] = React.useState(2);
    const [secondPrev, setSecondPrev] = React.useState(0);
    const [slide, setSlide] = React.useState('');

    for(let i=prev; i<next; i++) {
        temp.push(Courses[i]);
    }
    React.useEffect(() => {
        setSlide(temp);
    }, [])
    if(width > 1000) {
        const clickSelectOptionHandler = (type) => { 
            if(type === 1) {
                if(prev == 2 && next == 4) {
                    setPrev(0);
                    setNext(2);
                }
                else {
                    setPrev(prev+1);
                    setNext(next+1);
                }
            }
            if(type === 0) {
                if(prev == 0 && next == 2) {
                    setPrev(2);
                    setNext(4);
                }
                else {
                    setPrev(prev-1);
                    setNext(next-1);
                }
            }
            temp = [];
            for(let i=prev; i<next; i++) {
                temp.push(Courses[i]);
            }
            setSlide(temp); 
        }; 
        
        return (
            <div>
                <h1>Web Development Courses </h1>
                <div className="courses">
                    <div className="prev">
                        <button onClick={() => clickSelectOptionHandler(0)}>{less}</button>
                    </div>
                    
                    {slide}

                    <div className="next">
                        <button onClick={() => clickSelectOptionHandler(1)}>{greater}</button>
                    </div>
                </div>
            </div>
        );
    }
    else {
        temp = [];
        temp.push(Courses[secondPrev]);
        const clickSelectOptionHandler = (type) => { 
            if(type === 1) {
                if(secondPrev == 3) {
                    setSecondPrev(0);
                }
                else {
                    setSecondPrev(secondPrev+1);
                }
            }
            if(type === 0) {
                if(secondPrev == 0) {
                    setSecondPrev(3);
                }
                else {
                    setSecondPrev(secondPrev-1);
                }
            }
            temp = [];
            temp.push(Courses[secondPrev]);
            setSlide(temp); 
        }; 
        
        return (
            <div>
                <h1>Web Development Courses </h1>
                <div className="courses">
                    <div className="prev">
                        <button onClick={() => clickSelectOptionHandler(0)}>{less}</button>
                    </div>
                    
                    {slide}

                    <div className="next">
                        <button onClick={() => clickSelectOptionHandler(1)}>{greater}</button>
                    </div>
                </div>
            </div>
        );
    }

}

export default HomePage