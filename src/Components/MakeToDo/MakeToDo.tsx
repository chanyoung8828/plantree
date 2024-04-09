import React, { useRef, useState } from "react";
import { toDoArrState } from "../../atom";
import { useRecoilState } from "recoil";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { EmptyInputModal } from "../Modals/EmptyInputModal/EmptyInputModal";
import "./MakeToDo.scss";

export const MakeToDo = () => {
  const [listArr, setListArr] = useRecoilState(toDoArrState);
  const [inputToDo, setInputToDo] = useState("");
  const [showEmptyInputModal, setShowEmptyInputModal] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputToDo(e.target.value);
  };

  const clickSaveBtn = () => {
    if (listArr.length) {
      setListArr([
        ...listArr,
        { idx: listArr[listArr.length - 1].idx + 1, content: inputToDo },
      ]);
    } else if (!listArr.length) {
      setListArr([...listArr, { idx: 0, content: inputToDo }]);
    }
    setInputToDo("");
  };

  const handleEmptyInputModal = () => {
    setShowEmptyInputModal(true);
  };

  return (
    <div className="make-todo-container">
      <div className="make-todo-box">
        <div className="make-todo-input">
          <input
            ref={inputRef}
            placeholder="할 일을 입력해주세요"
            value={inputToDo}
            onChange={handleInput}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                inputToDo !== "" ? clickSaveBtn() : handleEmptyInputModal();
              }
            }}
            size={20}
            maxLength={12}
            spellCheck="false"
          />
        </div>
        <button
          onClick={() => {
            inputToDo !== "" ? clickSaveBtn() : handleEmptyInputModal();
            if (inputRef.current !== null) inputRef.current.focus();
          }}
        >
          <FontAwesomeIcon icon={faPlus} />
        </button>
      </div>
      <EmptyInputModal
        show={showEmptyInputModal}
        onHide={() => setShowEmptyInputModal(false)}
      />
    </div>
  );
};
