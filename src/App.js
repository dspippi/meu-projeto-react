import logo from "./logo.svg";
import "./App.css";
import "./components/HelloWorld.js"

import SayMyName from "./components/SayMyName";
import Pessoa from "./components/Pessoa"
import Frase from "./components/Frase"

function App() {
  const nome = "Fulano"
  return (
    <div className="App">
      <Frase/>
      
      <SayMyName nome="Calegari"/>
      <SayMyName nome="João"/>
      <SayMyName nome={nome}/>
      <Frase/>
      <Pessoa nome="Diogo" idade="29" profissão="Testador" foto="https://via.placeholder.com/150"/>
    </div>
  );
}

export default App;
