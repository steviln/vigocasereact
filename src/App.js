import logo from './logo.svg';
import './App.css';
import VigoMain from './VigoMain';
import { Link } from "react-router-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (
    <div className="App">
          <div>
      <h1>Vigo Test Case</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >

        <Link to="/skjema">skjema</Link> |{" "}
        <Link to="/list">Liste</Link>
               
      </nav>
    </div>
    </div>
  );
}

export default App;
