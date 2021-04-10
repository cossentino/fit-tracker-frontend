import NavBar from './components/NavBar'
import WorkoutsContainer from './containers/WorkoutsContainer'
import WorkoutChoice from './components/WorkoutChoice'
import CreateWorkoutForm from './components/CreateWorkoutForm'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginForm from './components/Sessions/LoginForm'
import CreateUserForm from './components/Sessions/CreateUserForm'
import React from 'react'
import { connect } from 'react-redux'
import Dashboard from './components/dashboard/Dashboard';
import GoalsContainer from './containers/goals/GoalsContainer'

const App = (props) => {

  return (
    <Router>
      <div className="App">
        <NavBar loggedIn={props.loggedIn} />
        <Switch>
          <Route path="/" exact component={Dashboard} />
          <Route path="/workouts" exact component={WorkoutsContainer} />
          <Route path="/workouts/new" exact component={WorkoutChoice} />
          <Route path="/workouts/create/:type" exact render={() => <CreateWorkoutForm />} />
          <Route path="/goals" exact component={GoalsContainer} />
          <Route path="/login" exact component={LoginForm} />
          <Route path="/signup" exact component={CreateUserForm} />
        </Switch>
      </div>
    </Router>
  );
}

const mapStateToProps = state => {
  return { loggedIn : state.loggedIn }
}

export default connect(mapStateToProps)(App);

