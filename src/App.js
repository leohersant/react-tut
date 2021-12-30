import logo from './logo.svg';
import './App.css';

function App() {


  const name = "Leo";

  const handleNameChange = () => {
    const names = ['Leo','Junior','Daniel','Katy','Shelly','Ashley','Rony','Ise','Mario'];
    const intx = Math.floor(Math.random() * 7);
    return names[intx];
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to see changes.
        </p>
        <p>Hello {name}!</p>
        <p>Your firend is {handleNameChange()}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
