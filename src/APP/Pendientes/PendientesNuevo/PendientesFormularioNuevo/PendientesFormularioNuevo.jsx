import { PendientesContext } from "../../PendientesContext/PendientesContext";
import React from "react";

function PendientesFormularioNuevo() {
  const [NuevoPendienteValor, SetNuevoPendienteValor] = React.useState("");
  const { AddPendientes, SetOpenModal } = React.useContext(PendientesContext);

  const OnCancel = () => {
    SetOpenModal(false);
  };

  const OnChange = (event) => {
    SetNuevoPendienteValor(event.target.value);
  };

  const OnSubmit = (event) => {
    event.preventDefault();
    AddPendientes(NuevoPendienteValor);
    SetOpenModal(false);
  };

  return (
    <div className="modal d-block" tabIndex="-1">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Nuevo Pendiente</h5>
          </div>

          <div className="modal-body">
            <form onSubmit={OnSubmit}>
              <div className="mb-3">
                <h6 className="form-label">Pendiente:</h6>
                <textarea
                  className="form-control"
                  rows="3"
                  placeholder="Escribe el pendiente aquí..."
                  value={NuevoPendienteValor}
                  onChange={OnChange}
                />
              </div>

              <div className="d-flex justify-content-end gap-2">
                <button type="submit" className="btn btn-success">
                  Guardar
                </button>
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={OnCancel}
                >
                  Cancelar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export { PendientesFormularioNuevo };
