import HomeContainer from './containers/homeContainer'
import NavBar from './components/NavBar'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import CreateWorkoutForm from './components/CreateWorkoutForm';

function App() {

  return (
    <div className="App">
      <NavBar />
      <Router>
        <Switch>
          <Route path='/' exact>
            <HomeContainer />
          </Route>
          <Route path='/workouts' exact>
            <HomeContainer />
          </Route>
          <Route path='/workouts/create' exact>
            <CreateWorkoutForm />
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;


// fetch('http://localhost:3000/api/v1/users/1/workouts')
//   .then(resp => resp.json() )
//   .then(json => console.log(json))