import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [todos, setTodos] = useState([]);
  //npm i axios
  //fetch를 npm i axios로 axios 설치해서 axios 코드로 변경하기

  const [selectTodo, setSelectTodo] = useState(null);
  //버튼 클릭시 보여줄 코드 작성

  const watchTodo = (todo) => {
    //선택된 todo아이템을 상세정보로 보여줄 예정
    setSelectTodo(todo);
  };

  useEffect(() => {
    axios
      //데이터 가져오기
      .get("http://localhost:5001/api/todos")
      .then((response) => setTodos(response.data))
      .catch((error) => console.log("에러가 발생했습니다.", error));
  }, []);

  return (
    <div>
      <h1>todoList</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.ID}>
            {todo.TASK}
            <button onClick={() => watchTodo(todo)}>상세보기</button>
          </li>
        ))}
      </ul>
      {selectTodo && (
        <div>
          <h2>상세 정보</h2>
          <p>Id : {selectTodo.ID}</p>
          <p>Task : {selectTodo.TASK}</p>
          <button onClick={() => watchTodo()}>닫기</button>
        </div>
      )}
    </div>
  );
}

export default App;

/*
import React, { useState, useEffect } from 'react';

function App() {
  const [todos, setTodos] = useState([]);

  // npm i axios
  // fetch 를 npm i axios로 axios 설치해서 axios 코드로 변경하기
  // 30 분까지 실습 진행
  
  useEffect(() => {
    //추후 server에서 Express를 활용해서 todos 데이터 가져올 것
    fetch('/')
      .then((res) => res.json())
      .then((data) => setTodos(data))
      .catch((error) => console.error('에러가 발생했습니다.', error));
  });

  return (
    <div>
      <h1>투두 리스트</h1>
      <ul>
        <li>
          {todos.map((todo) => {
            <li key={todo.ID}> {todo.TASK}</li>;
          })}
        </li>
      </ul>
    </div>
  );
}

export default App;
*/
