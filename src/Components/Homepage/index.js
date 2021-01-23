

import React from 'react'

import javascript from '../../images/javascript.png'
import html from '../../images/html.png'
import css from '../../images/css.jpg'
import react from '../../images/react.jpg'
import { useHistory,BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Course from './Course'

const HomePage = () => {
    return (
    <div className="courses">
        <Course source={html} width={80} description="Get upskilled in HTML5"/>
        {/* <CourseDetails /> */}
        <Course source={css} width={80} description="Get upskilled in CSS3"/>
        <Course source={javascript} width={110} description="Get upskilled in Vanilla Javscript"/>
        <Course source={react} width={120} description="Get upskilled in React.js"/>
    </div>
    )
}


export default HomePage
