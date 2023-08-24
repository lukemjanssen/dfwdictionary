//import logo from './logo.svg';
import "./App.css";
import Appbar from "./components/Appbar";
import Word from "./components/Word";
function App() {
  return (
    <div className="App" style={{ backgroundColor: "#D3D3D3" }}>
      <Appbar />
      <Word />
    </div>
  );
}

export default App;
