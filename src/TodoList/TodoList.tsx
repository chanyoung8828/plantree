import React, { useState } from "react";
import "./TodoList.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTree } from "@fortawesome/free-solid-svg-icons";
interface TodoItem {
  id: number;
  content: string;
}

export const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<TodoItem[]>([]);
  const [inputValue, setInputValue] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleEnterKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && inputValue.trim() !== "") {
      // 입력된 값이 비어 있지 않으면 새로운 할 일을 추가
      const newTodo: TodoItem = {
        id: todos.length + 1,
        content: inputValue.trim(),
      };
      setTodos([...todos, newTodo]);
      setInputValue(""); // 입력 필드 초기화
    }
  };
  return (
    <div className="main-container">
      <div className="main-title">
        <FontAwesomeIcon icon={faTree} />
        <div className="title-font">PlanTree</div>
      </div>
      <div className="list">
        <input
          type="text"
          placeholder="Add todo item"
          value={inputValue}
          onChange={handleInputChange}
          onKeyPress={handleEnterKeyPress}
        />
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>{todo.content}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
