import "./App.css";
import CardDefeitos from "./components/CardDefeitos.js";
import { defeitos } from "./data/defeitos.js";

function App() {
  return (
    <div>
      <h1 className="tituloPrincipal">Controle de Defeitos</h1>

      <div className="painel">
        {defeitos.map((defeito) => (
          <CardDefeitos key={defeito.id} defeito={defeito} />
        ))}
      </div>
    </div>
  );
}

export default App;
