import './App.css';

function App() {

  return (
    <div className="App">
      test test
    </div>
  );
}

export default App;


fetch('http://localhost:3000/api/v1/users')
  .then(resp => resp.json() )
  .then(json => console.log(json))