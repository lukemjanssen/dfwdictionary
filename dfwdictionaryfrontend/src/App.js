//import logo from './logo.svg';
import "./App.css";
import Appbar from "./components/Appbar";
import Word from "./components/Word";
function App() {
  return (
    <div className="App" style={{ backgroundColor: "#F7F6F1" }}>
      <Appbar />
      <Word />
    </div>
  );
}

export default App;
