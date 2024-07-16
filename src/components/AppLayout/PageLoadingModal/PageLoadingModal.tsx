import React from "react";
import Modal from "react-bootstrap/Modal";
 
export const PageLoadingModal = () => {
  return (
    <Modal show={true} backdrop="static" keyboard={false} size="sm" centered>
      <Modal.Body>
        <Modal.Title className="text-center">Loading...</Modal.Title>
        <div className="row justify-content-center">
          <div className="col-2">
            <span
              className="spinner-border spinner-border-lg text-center"
              role="status"
            />
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};
 
export default PageLoadingModal;