import NavBar from './components/NavBar'
import WorkoutsContainer from './containers/WorkoutsContainer'
import CreateWorkoutForm from './components/CreateWorkoutForm'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginForm from './components/LoginForm'
import React from 'react'
import { store } from './index'

function App() {


  React.useEffect(() => { 
    const userInfo = JSON.parse(localStorage.getItem('user'))
    if (store.getState().user === {} ) {
      store.dispatch({type: 'ADD_USER', userInfo })
    }
  })

  
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

