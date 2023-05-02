import "./App.css";
import Todos from "./components/Todos.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>To do's:</h1>
        <Todos />
      </header>
    </div>
  );
}

export default App;
