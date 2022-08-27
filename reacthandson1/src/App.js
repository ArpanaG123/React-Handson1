import logo from './logo.svg';
import './App.css';
import Functional from './Components/Functional'
import Class from './Components/Class'

function App() {
  return (
    <div className="App">
      <h1 style={{textShadow:'5px 2px 3px #21E1E1',fontStyle:'italic'}}>Styling using Functional and class Component</h1><br></br><br></br>
      <Functional />
      <Class />
    </div>
  );
}

export default App;
