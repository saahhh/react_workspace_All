import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [todos, setTodos] = useState([]);
  //null값으로 useState 선택해서 상세보는 selectTodo, setSelectTodo

  const [selectTodo, setSelectTodo] = useState(null);

  const watchTodo = (todo) => {
    //선택된 todo아이템을 상세정보로 보여줄 예정
    setSelectTodo(todo);
  };
  useEffect(() => {
    //const watchTodos = () => {
    axios
      .get("http://localhost:5007/api/todos")
      .then((res) => setTodos(res.data))
      .catch((error) => console.error("모두 불러오기 실패 에러입니다.", error));
  }, []);
  return (
    <div>
      <h1>할일 리스트</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo[0]}>
            <button onClick={() => watchTodo(todo)}>상세보기</button>
          </li>
        ))}
      </ul>
      {selectTodo && (
        <div>
          <h2>상세 정보</h2>
          <p>Id : {selectTodo[0]}</p>
          <p>Task : {selectTodo[1]}</p>
        </div>
      )}
    </div>
  );
}

export default App;

//index 값으로 가지고 올 때 0부터 시작
