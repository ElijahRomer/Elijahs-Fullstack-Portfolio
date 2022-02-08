import { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

function ConfirmModal(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="d-flex justify-content-center">
        <Button
          className="btn btn-primary col-sm-12 col-md-4 mx-auto"
          onClick={async (e) => {
            let valid = await props.fn(e);
            console.log(valid);
            if (valid) {
              handleShow();
              valid = false;
            }
          }}
        >
          Submit
        </Button>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Your message has been sent!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ul>
            <li>Name: {props.name}</li>
            <li>Email: {props.email}</li>
            <li>Message: {props.message}</li>
          </ul>
          <p>I will contact you shortly!</p>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="primary"
            onClick={() => {
              props.clearForm();
              handleClose();
            }}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ConfirmModal;
