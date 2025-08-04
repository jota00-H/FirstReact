import logo from './logo.svg';
import './App.css';
import BoxHome from './Componentes/BoxHome';
import ParaBox from './Componentes/ParaBox';
  
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Parabéns, João Henrique!</h1>
        <BoxHome />
        <ParaBox nome="joao" profissao = "medico" idade = "15" />
      </header>
    </div>
  );
}

export default App;
