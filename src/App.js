
import "./App.css";
import "./components/HelloWorld.js"

import SayMyName from "./components/SayMyName";
import Pessoa from "./components/Pessoa"
import Frase from "./components/Frase"
import List from "./components/List"


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
      <List/>
      
    </div>
  );
}

export default App;
