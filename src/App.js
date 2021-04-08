import NavBar from './components/NavBar'
import Workouts from './components/Workouts'
import CreateWorkoutForm from './components/CreateWorkoutForm'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Workout from './components/Workout';


function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route path="/workouts" exact component={Workouts} />
          <Route path="/workouts/create" exact component={CreateWorkoutForm} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

