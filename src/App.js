import { useHistory,BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import HomePage from './Components/Homepage/index';
import ViewDetails from './Components/viewDetails/index'
import SubmitInfo from './Components/submitInfo/index'
import './App.css';

function App() {
  return (
    <Router>
      <Switch >
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/submitInfo">
          <SubmitInfo />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;