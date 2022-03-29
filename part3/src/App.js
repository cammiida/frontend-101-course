import logo from "./logo.svg";
import "./App.css";
import Counter from "./Counter";
import "@navikt/ds-css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Counter title="My first counter"></Counter>
        <Counter title="My second counter"></Counter>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
