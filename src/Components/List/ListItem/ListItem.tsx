import React, { useRef, useState } from "react";
import { useRecoilState } from "recoil";
import { BoxStyle } from "../../Styles/BoxStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareCheck,
  faPencil,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import "./ListItem.scss";
import { toDoArrState } from "../../../atom";
import { DeleteModal } from "../../Modals/DeleteModal/DeleteModal";

type ListItemProps = {
  content: string;
  idx: number;
};

export const ListItem: React.FC<ListItemProps> = ({ content, idx }) => {
  const [listArr, setListArr] = useRecoilState(toDoArrState);
  const [checked, setChecked] = useState("no-checked");
  const [beingModify, setBeingModify] = useState(false);
  const [inputContent, setInputContent] = useState(content);
  const [deleteModalShow, setDeleteModalShow] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const clickCheckBox = () => {
    if (!beingModify) {
      checked === "checked" ? setChecked("no-checked") : setChecked("checked");
    }
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputContent(e.target.value);
  };

  const clickModifyBtn = () => {
    setBeingModify(true);
    if (inputRef.current !== null) {
      inputRef.current.disabled = false;
      inputRef.current.focus();
    }
  };

  const clickSaveModifyBtn = () => {
    setBeingModify(false);
    setListArr(
      listArr.map((list, idx) => {
        if (list.idx !== listArr[idx].idx) {
          return list;
        } else {
          return { ...list, content: inputContent };
        }
      })
    );
  };

  const clickDeleteBtn = () => {
    setDeleteModalShow(true);
  };

  return (
    <div className="list-container">
      <BoxStyle className="list-item">
        <div className="checkbox" onClick={clickCheckBox}>
          <FontAwesomeIcon icon={faSquareCheck} className="icon" />
          <input
            ref={inputRef}
            type="text"
            className={`content ${checked} ${beingModify && "modifying"}`}
            value={inputContent}
            onChange={handleInput}
            onKeyDown={(e) => e.key === "Enter" && setBeingModify(false)}
            disabled={beingModify ? false : true}
            autoComplete="off"
            size={20}
            maxLength={12}
            spellCheck="false"
          />
        </div>
        {!beingModify && (
          <div>
            <FontAwesomeIcon
              onClick={clickModifyBtn}
              icon={faPencil}
              className={`icon small ${checked}`}
            />
            <FontAwesomeIcon
              onClick={clickDeleteBtn}
              icon={faTrashCan}
              className="icon small"
            />
          </div>
        )}
        {beingModify && (
          <button className="save-modify" onClick={clickSaveModifyBtn}>
            수정완료
          </button>
        )}
        <DeleteModal
          idx={idx}
          show={deleteModalShow}
          onHide={() => setDeleteModalShow(false)}
        />
      </BoxStyle>
    </div>
  );
};
