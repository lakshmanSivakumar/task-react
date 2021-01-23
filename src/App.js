import Course from './Components/Course'
import CourseDetails from './Components/CourseDetails'

import javascript from './images/javascript.png'
import html from './images/html.png'
import css from './images/css.jpg'
import react from './images/react.jpg'
import './App.css';

function App() {
  return (
    <div className="courses">
        <Course source={html} width={80} description="Get upskilled in HTML5"/>
        <CourseDetails />
        <Course source={css} width={80} description="Get upskilled in CSS3"/>
        <Course source={javascript} width={110} description="Get upskilled in Vanilla Javscript"/>
        <Course source={react} width={120} description="Get upskilled in React.js"/>
    </div>
  );
}

export default App;
