import { PendientesContext } from "../PendientesContext/PendientesContext";
import React from "react";

function PendientesBuscar() {
  const { SearchValue, SetSearchValue } = React.useContext(PendientesContext);
  return (
    <div className="input-group mb-5 shadow-sm rounded-pill overflow-hidden border">
      <span className="input-group-text bg-white border-0 ps-4 text-muted">
        <i className="bi bi-search"></i>
      </span>
      <input
        type="text"
        className="form-control border-0 py-3 ps-2 shadow-none"
        placeholder="¿Qué tarea estás buscando?..."
        aria-label="Buscar pendiente"
        style={{ fontSize: "1.1rem" }}
        value={SearchValue}
        onChange={(event) => {
          SetSearchValue(event.target.value);
        }}
      />
    </div>
  );
}
export { PendientesBuscar };
