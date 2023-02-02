function HeaderModal(props) {

  return (
    <div className="modal-header pb-0 border-0 justify-content-end">
      <div className="card-header">
        <div className="card-title">
          <h2 className="fw-bolder modal-title">{props.title}</h2>
        </div>
      </div>
      <div className="btn btn-sm btn-icon btn-active-color-primary btn-close" data-bs-dismiss="modal" onClick={props.closeModal}>
        <span className="svg-icon svg-icon-1">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
            fill="none">
            <rect opacity="0.5" x="6" y="17.3137" width="16" height="2"
              rx="1" transform="rotate(-45 6 17.3137)" fill="black"></rect>
            <rect x="7.41422" y="6" width="16" height="2" rx="1"
              transform="rotate(45 7.41422 6)" fill="black"></rect>
          </svg>
        </span>
      </div>
    </div>
  );
}

export default HeaderModal;