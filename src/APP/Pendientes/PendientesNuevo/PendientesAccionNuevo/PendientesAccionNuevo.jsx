import "./PendientesAccionNuevo.css";

function PendienteNuevoButton({ SetOpenModal }) {
  return (
    <button
      className="btn btn-primary btn-flotante rounded-circle p-3"
      style={{ width: "60px", height: "60px" }}
      onClick={() => SetOpenModal((state) => !state)}
    >
      <i className="bi bi-plus-lg fs-4"></i>
    </button>
  );
}

export { PendienteNuevoButton };
