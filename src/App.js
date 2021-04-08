import HomeContainer from './containers/homeContainer'
import NavBar from './components/NavBar'
import { Switch, Route } from "react-router-dom";
import CreateWorkoutForm from './components/CreateWorkoutForm';

function App() {
  return (
    <div className="App">
      <NavBar />
        <Switch>
          <Route path='/' exact component={HomeContainer}>
            <HomeContainer />
          </Route>
          <Route path='/workouts' exact>
            <HomeContainer />
          </Route>
          <Route path='/workouts/create' exact>
            <CreateWorkoutForm />
          </Route>
        </Switch>
    </div>
  );
}

export default App;

