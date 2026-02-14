function PendientesItem({ text, completed, onComplete, onDelete }) {
  return (
    <li
      className={`list-group-item d-flex justify-content-between align-items-center p-3 mb-2 border-0 shadow-sm rounded-3 
  ${completed ? "bg-success-subtle border-start border-success border-4" : "bg-light border-start border-warning border-4"}`}
    >
      <div className="d-flex align-items-center">
        <button
          className={`btn ${completed ? "btn-success" : "btn-outline-secondary"} btn-sm me-3 rounded-circle d-flex align-items-center justify-content-center`}
          style={{ width: "32px", height: "32px" }}
          onClick={onComplete}
        >
          ✓
        </button>
        <h6
          className={`mb-0 ${completed ? "text-decoration-line-through text-muted" : "text-dark fw-bold"}`}
        >
          {text}
        </h6>
      </div>

      <button
        className="btn btn-outline-danger btn-sm border-0 rounded-circle"
        onClick={onDelete}
      >
        ✕
      </button>
    </li>
  );
}

export { PendientesItem };
