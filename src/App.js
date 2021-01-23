import Course from './Components/Homepage/Course'
import CourseDetails from './Components/Homepage/CourseDetails'


import './App.css';
import { useHistory,BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './Components/Homepage/index';
import ViewDetails from './Components/viewDetails'

function App() {
  return (

    <Router>
      <Switch >
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/viewdetails">
          <ViewDetails />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
