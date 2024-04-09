import React from "react";
import { Modal } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { useRecoilState } from "recoil";
import { toDoArrState } from "../../../atom";
import "./DeleteModal.scss";

type DeleteModalProps = {
  idx: number;
  show: boolean;
  onHide: () => void;
};

export const DeleteModal: React.FC<DeleteModalProps> = (props) => {
  const [listArr, setListArr] = useRecoilState(toDoArrState);

  const handleDelete = () => {
    setListArr(listArr.filter((list) => list.idx !== props.idx));
  };
  return (
    <div>
      <Modal
        {...props}
        size="sm"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body>
          <br />
          <p>삭제하시겠습니까?</p>
          <br />
        </Modal.Body>
        <div className="modal-style">
          <div className="modal-footer">
            <Button className="btn" onClick={props.onHide}>
              취소
            </Button>
            <Button className="btn" onClick={handleDelete}>
              확인
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};
