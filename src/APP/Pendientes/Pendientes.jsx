import { PendientesContext } from "./PendientesContext/PendientesContext";
import { PendienteNuevoButton } from "./PendientesNuevo/PendientesAccionNuevo/PendientesAccionNuevo";
import { PendientesFormularioNuevo } from "./PendientesNuevo/PendientesFormularioNuevo/PendientesFormularioNuevo";
import { PendientesBuscar } from "./PendientesBuscar/PendientesBuscar";
import { PendientesLista } from "./PendientesLista/PendientesLista";
import { PendientesItem } from "./PendientesLista/PendientesItem/PendientesItem";
import { Modal } from "../Components/Modal/Modal";
import React from "react";

function Pendientes() {
  const {
    loading,
    error,
    SetOpenModal,
    OpenModal,
    DeletePendientes,
    CompletePendientes,
    SearchedPendientes,
    CompletedPendientes,
    PendientesTotal,
  } = React.useContext(PendientesContext);

  console.log({ SearchedPendientes });
  return (
    <>
      <div className="bg-light">
        <div className="container py-5">
          <div className="row justify-content-center">
            <div className="col-md-6">
              <div className="text-center mb-5 py-4 bg-light rounded-4 shadow-sm border">
                <h1 className="display-4 fw-extrabold text-primary mb-3">
                  Mis Pendientes
                </h1>
                <div className="d-flex justify-content-center align-items-center gap-3">
                  <h5 className="text-secondary fw-normal mb-0">
                    Progreso:
                    <span className="ms-2 badge rounded-pill bg-success-subtle text-success border border-success-subtle px-3">
                      {CompletedPendientes}
                    </span>
                  </h5>
                  <div
                    className="vr text-muted opacity-25"
                    style={{ height: "20px" }}
                  ></div>
                  <h5 className="text-secondary fw-normal mb-0">
                    Total:
                    <span className="ms-2 badge rounded-pill bg-danger-subtle text-danger border border-danger-subtle px-3">
                      {PendientesTotal}
                    </span>
                  </h5>
                </div>
              </div>

              <PendientesBuscar />

              <div className="card shadow-lg border-0 rounded-4 overflow-hidden">
                <div className="card-header bg-white py-3 border-bottom-0 d-flex align-items-center justify-content-between">
                  <h5 className="mb-0 fw-bold text-dark px-2">
                    Lista de Pendientes
                  </h5>
                  {SearchedPendientes.length > 0 && (
                    <span className="badge rounded-pill bg-light text-muted border">
                      {SearchedPendientes.length} items
                    </span>
                  )}
                </div>

                <div className="card-body p-0">
                  <PendientesLista>
                    {loading && (
                      <div className="text-center py-5">
                        <div
                          className="spinner-border text-primary mb-3"
                          role="status"
                        ></div>
                        <h6 className="text-muted fw-light">
                          Sincronizando tus tareas...
                        </h6>
                      </div>
                    )}

                    {error && (
                      <div
                        className="alert alert-danger m-3 border-0 shadow-sm"
                        role="alert"
                      >
                        <div className="d-flex align-items-center">
                          <span className="fs-4 me-3">⚠️</span>
                          <div>
                            <strong>¡Ups!</strong> Hubo un problema al cargar
                            los datos.
                          </div>
                        </div>
                      </div>
                    )}

                    {!loading && !error && SearchedPendientes.length === 0 && (
                      <div className="text-center py-5 px-4">
                        <div className="display-1 text-light mb-3">📝</div>
                        <h5 className="text-secondary fw-bold">
                          ¡Todo despejado!
                        </h5>
                        <p className="text-muted small">
                          No hay pendientes que coincidan. Crea uno nuevo para
                          empezar.
                        </p>
                      </div>
                    )}

                    {!loading &&
                      SearchedPendientes.map((pendiente) => (
                        <PendientesItem
                          key={pendiente.text}
                          text={pendiente.text}
                          completed={pendiente.completed}
                          onComplete={() => CompletePendientes(pendiente.text)}
                          onDelete={() => DeletePendientes(pendiente.text)}
                        />
                      ))}
                  </PendientesLista>
                </div>
              </div>
            </div>
          </div>
        </div>
        <PendienteNuevoButton SetOpenModal={SetOpenModal} />
      </div>
      {OpenModal && (
        <Modal>
          <PendientesFormularioNuevo />
        </Modal>
      )}
    </>
  );
}

export { Pendientes };
