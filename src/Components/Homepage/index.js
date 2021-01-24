import React from 'react'
import { useHistory,BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Course from './Course'

import javascript from '../../images/javascript.png'
import htmlAndCss from '../../images/htmlAndCss.png'
import nodejs from '../../images/nodejs.png'
import react from '../../images/react.jpg'

const HomePage = () => {
    return (
    <div className="courses">
        <Course id={1} source={htmlAndCss} width={190} description="Get upskilled in HTML5 and CSS3"/>
        <Course id={2} source={nodejs} width={150} description="Get upskilled in Node.js"/>
        <Course id={3} source={javascript} width={110} description="Get upskilled in Vanilla Javscript"/>
        <Course id={4} source={react} width={120} description="Get upskilled in React.js"/>
    </div>
    );
}

export default HomePage