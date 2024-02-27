import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className="App-link" href="https://dplinktest.netlify.app/">
          Deep link to Home Page
        </a>

        <a className="App-link" href="https://dplinktest.netlify.app/details">
          Deep link to Details Page
        </a>
      </header>
    </div>
  );
}

export default App;
