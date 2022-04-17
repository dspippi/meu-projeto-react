import logo from "./logo.svg";
import "./App.css";

function App() {
  const name = "Calegari";

function soma(a,b){
  return a+b;
}

const url = "https://via.placeholder.com/150"

  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <h2>Entendendo o React</h2>
      <h2>{name}</h2>
      <h2>Soma: {soma(3,1)}</h2>
      <img src={url} alt="Minha imagem" />
    </div>
  );
}

export default App;
