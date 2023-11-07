import React, { useCallback, useState } from "react";

const TodoApp = ({ todoItems, addTodo, removeTodo, removeAllTodo }) => {
  const [newTodo, setNewTodo] = useState("");

  const onInput = useCallback((e) => {
    setNewTodo(e.target.value);
  }, []);

  const onClickAddBtn = () => {
    addTodo(newTodo);
    setNewTodo("");
  };

  return (
    <>
      <h3>오늘 할 일</h3>
      <ul>
        {todoItems.map((todoItem, idx) => {
          return <li key={idx}>{todoItem}</li>;
        })}
      </ul>
      <div>
        <input value={newTodo} onChange={onInput} />
        <button onClick={onClickAddBtn}>할 일 추가</button>
        <button onClick={removeTodo}>할 일 삭제</button>
        <button onClick={removeAllTodo}>모두 삭제</button>
      </div>
    </>
  );
};

export default TodoApp;
