import Logo from "./result.png";
import Audi from './audio.mp3'
import "./App.css";
import { useRef } from "react";

function App() {
  const ref = useRef()
  
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={Logo} className="App-logo" alt="logo" onClick={()=> ref.current.play()} />
        <p>Hello , Im a Retard.</p>
        <a className="App-link">Better User interface Soon...</a>
      </header>
      <audio ref={ref} src={Audi} />
    </div>  
  );
}

export default App;
