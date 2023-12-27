import React, { useState, useEffect } from "react";
import axios from "axios";
//npm i react-router-dom
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Todos from "./Todos";

const Home = () => <div>홈페이지</div>;

function App() {
  const [todos, setTodos] = useState([]);
  //null값으로 useState 선택해서 상세보는 selectTodo, setSelectTodo

  useEffect(() => {
    //const watchTodos = () => {
    axios
      .get("http://localhost:5001/api/todos")
      .then((res) => setTodos(res.data))
      .catch((error) => console.error("모두 불러오기 실패 에러입니다.", error));
  }, []);
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/"></Link>
          </li>
        </ul>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todos" element={<Todos />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

//index 값으로 가지고 올 때 0부터 시작

/*
import React, { useState, useEffect } from "react";
import axios from "axios";


function App() {
  const [todos, setTodos] = useState([]);
  //null값으로 useState 선택해서 상세보는 selectTodo, setSelectTodo

  useEffect(() => {
    //const watchTodos = () => {
    axios
      .get("http://localhost:5001/api/todos")
      .then((res) => setTodos(res.data))
      .catch((error) => console.error("모두 불러오기 실패 에러입니다.", error));
  }, []);
  return (
    <div>
      <h1>할일 리스트</h1>
      <ul>
        {todos.map((todos) => (
          <li key={todos[0]}>{todos[1]}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;

//index 값으로 가지고 올 때 0부터 시작
 
*/
