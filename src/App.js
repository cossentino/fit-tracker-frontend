import NavBar from './components/NavBar'
import WorkoutsContainer from './containers/WorkoutsContainer'
import CreateWorkoutForm from './components/CreateWorkoutForm'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginForm from './components/LoginForm'
import React from 'react'
import { store } from './index'

function App() {



  React.useEffect(() => {
    let user = {}
    localStorage.setItem('user', JSON.stringify(store.getState().user))
    user = localStorage.getItem('user')
    console.log(user)
  })

  return (
    <Router>
      <div className="App">
        <NavBar />
        {localStorage.getItem('user') ? 
        <Switch>
          <Route path="/workouts" exact component={WorkoutsContainer} />
          <Route path="/workouts/create" exact component={CreateWorkoutForm} />
          <Route path="/login" exact component={LoginForm} />
        </Switch>
        : <LoginForm />}
      </div>
    </Router>
  );
}

export default App;

