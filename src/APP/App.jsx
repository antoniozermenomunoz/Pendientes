import { PendientesProvider } from "./Pendientes/PendientesContext/PendientesContext";
import { Pendientes } from "./Pendientes/Pendientes";
import "./App.css";

function App() {
  return (
    <>
      <PendientesProvider>
        <Pendientes />
      </PendientesProvider>
    </>
  );
}

export default App;
