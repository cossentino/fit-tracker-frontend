import React from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from './components/NavBar'
import WorkoutsContainer from './containers/WorkoutsContainer'
import WorkoutChoice from './components/workouts/WorkoutChoice'
import CreateWorkoutForm from './components/workouts/CreateWorkoutForm'
import LoginForm from './components/sessions/LoginForm'
import CreateUserForm from './components/sessions/CreateUserForm'
import DashboardContainer from './containers/DashboardContainer'
import GoalsContainer from './containers/goals/GoalsContainer'
import CreateGoalForm from './components/goals/CreateGoalForm';
import fetchWorkouts from './actions/fetchWorkouts'
import fetchGoals from './actions/fetchGoals'
import { store } from '.';
import { currentUser } from './library'

const App = props => {

  React.useEffect(() => {
    store.dispatch(fetchGoals(currentUser()))
    store.dispatch(fetchWorkouts(currentUser()))
  })

  return (
    <Router>
      <div className="App">
        <NavBar loggedIn={props.loggedIn} />
        <Switch>
          <Route path="/" exact component={DashboardContainer} />
          <Route path="/workouts" exact component={WorkoutsContainer} />
          <Route path="/workouts/new" exact component={WorkoutChoice} />
          <Route path="/workouts/create/:type" exact render={() => <CreateWorkoutForm />} />
          <Route path="/goals" exact render={() => <GoalsContainer />} />
          <Route path="/goals/create" exact component={CreateGoalForm} />
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

