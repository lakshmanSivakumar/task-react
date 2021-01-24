import React from 'react'
import { useHistory,BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Course from './Course'

import javascript from '../../images/javascript.png'
import html from '../../images/html.png'
import css from '../../images/css.jpg'
import react from '../../images/react.jpg'

const HomePage = () => {
    return (
    <div className="courses">
        <Course id={1} source={html} width={80} description="Get upskilled in HTML5"/>
        <Course id={2} source={css} width={80} description="Get upskilled in CSS3"/>
        <Course id={3} source={javascript} width={110} description="Get upskilled in Vanilla Javscript"/>
        <Course id={4} source={react} width={120} description="Get upskilled in React.js"/>
    </div>
    );
}

export default HomePage