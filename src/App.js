import NavBar from './components/NavBar'
import WorkoutsContainer from './containers/WorkoutsContainer'
import CreateWorkoutForm from './components/CreateWorkoutForm'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginForm from './components/LoginForm'
import React from 'react'

function App() {

  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route path="/workouts" exact component={WorkoutsContainer} />
          <Route path="/workouts/create" exact render={() => <CreateWorkoutForm />} />
          <Route path="/login" exact component={LoginForm} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

