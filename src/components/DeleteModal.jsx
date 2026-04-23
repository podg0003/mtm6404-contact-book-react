function DeleteModal({ contact, onConfirm, onCancel }) {
  const { firstName, lastName } = contact

  return (
      <div className="modal show" style={{display: "block"}} onClick={(e) => e.stopPropagation()}>
        <h5>Delete Contact?</h5>
        <p>
          Are you sure you want to remove{" "}
          <strong>
            {firstName} {lastName}
          </strong>
          ? This cannot be undone.
        </p>
        <div className="d-flex gap-2 justify-content-center">
          <button className="btn btn-outline-dark" onClick={onCancel}>
            Cancel
          </button>
          <button className="btn btn-outline-danger" onClick={onConfirm}>
            <i className="bi bi-trash3"></i> Delete
          </button>
        </div>
      </div>
  );
}

export default DeleteModal