import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function App() {

  return (
    <div className="App">
      
    </div>
  );
}

export default App;


fetch('http://localhost:3000/api/v1/users')
  .then(resp => resp.json() )
  .then(json => console.log(json))