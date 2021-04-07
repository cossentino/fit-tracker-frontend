import Home from './components/Home'

function App() {

  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;


fetch('http://localhost:3000/api/v1/users')
  .then(resp => resp.json() )
  .then(json => console.log(json))