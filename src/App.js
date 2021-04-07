import Home from './components/Home'
import HomeContainer from './containers/homeContainer'

function App() {

  return (
    <div className="App">
      <HomeContainer />
    </div>
  );
}

export default App;


// fetch('http://localhost:3000/api/v1/users/1/workouts')
//   .then(resp => resp.json() )
//   .then(json => console.log(json))