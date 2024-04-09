import React from "react";
import Modal from "react-bootstrap/Modal";
import { Button } from "react-bootstrap";
import "./EmptyInputModal.scss";

type EmptyInputModalProps = {
  show: boolean;
  onHide: () => void;
};

export const EmptyInputModal: React.FC<EmptyInputModalProps> = ({
  show,
  onHide,
}) => {
  return (
    <Modal
      show={show}
      onHide={onHide}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        <br />
        <p>할 일을 입력해주세요.</p>
        <br />
      </Modal.Body>
      <div className="modal-footer">
        <Button className="btn" onClick={onHide}>
          확인
        </Button>
      </div>
    </Modal>
  );
};
