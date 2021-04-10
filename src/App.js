import NavBar from './components/NavBar'
import WorkoutsContainer from './containers/WorkoutsContainer'
import CreateWorkoutForm from './components/CreateWorkoutForm'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginForm from './components/LoginForm'
import CreateUserForm from './components/CreateUserForm'
import React from 'react'
import { connect } from 'react-redux'

const App = (props) => {

  return (
    <Router>
      <div className="App">
        <NavBar loggedIn={props.loggedIn} />
        <Switch>
          <Route path="/workouts" exact component={WorkoutsContainer} />
          <Route path="/workouts/create" exact render={() => <CreateWorkoutForm />} />
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

