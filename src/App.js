import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a className="App-link" href="https://dplinktest.netlify.app/">
          Deep link to Home Page
        </a>

        <div style={{ height: "50px" }} />

        <a className="App-link" href="https://dplinktest.netlify.app/details">
          Deep link to Details Page
        </a>
      </header>
    </div>
  );
}

export default App;
