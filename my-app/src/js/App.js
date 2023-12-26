import React from 'react';
//BrowserRouter : html 라우팅 처리하는데 사용
//라우팅 : 다른 페이지간의 전환이나 네비게이션 관리하는 것을 나타냄
//렌더링 : 컴퓨터 프로그램에서 데이터나 그래픽을 화면에 나타내는 과정
//Route : URL경로에 따라 특정 컴포넌트(function)을 렌더링(화면에 나타내는 과정)하는데 사용
//Routes : 여러 개 Route를 그룹으로 만들고 관리하는데 사용
//Link : 클릭 가능한 링크를 생성하는데 사용
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Blog from './Blog';

/*
const About = () => {
  return (
    <div>소개페이지</div>; 
  )
}
*/
const About = () => <div>소개페이지</div>;


const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">소개</Link>
            </li>
            <li>
              <Link to="/todo">TodoList</Link>
            </li>
          </ul>
        </nav>
        <hr />
        <Routes>
          <Route path='/' element={<Blog />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App;





































/*

import React, {useState} from 'react';
// useState : 상태를 관리하기위해 사용되는 함수
// 사용법 : 배열형식으로 사용을 하며, 
//첫 번째 배열은 현재 상태값,  두 번째 배열은 상태 업데이트 하는 값
// const [count, setCount] = useState(0);
function Counter () {
  //자바스크립트 코드 작성하는 공간
  //    [초기값, 변경될 값] = 초기값 설정해주는 공간
  const [count, setCount] = useState();

  const increment = () => {
    setCount(count + 1);
  }

  return ( //html태그 코드는 return안에 작성해준다
    <div>
      <h1>Count : {count}</h1>
      <button onClick={increment}>증가시키는 버튼</button>
    </div>
    //순수 바닐라자바스크립트에서는 onclick으로 작성을 했지만 
    //리액트자바스크립트에서는 onClick C를 대문자로 활용하는 카멜케이스를 사용한다 
  )
}

//Js에서는 글자값인지 숫자값인지 중요하지 않음
//재사용이 가능한지 재할당이 가능한지가 중요함

//var : 재할당, 재선언 가능 //밑에서 안된 error예제 모두 가능하다
//let : 재선언은 하지 못하지만 재할당은 가능
        //let count = 0;
        //count = 1;
        //까지는 가능
        //let count = 2;는 불가
//const : 재선언, 재선언 둘 다 불가 / 한 번 선언하면 다시 값을 변경하거나 수정할 수 없음

const msg = "hihi";
//msg = "aa"; // msg에 다른 값을 넣고 싶어서 추가로 값 변경하려하면 error가 발생함

function HiComponent() {
  return (
    <div>
      <h1>{msg}</h1>
      <p>이것은 Hi 컴포넌트입니다</p>
    </div>
  )
}

function App() {
  return (
    <div>
      <h1>React</h1>
      <h2>{msg}</h2>
      <Counter />
      <HiComponent />
      <HiComponent />
      <p>이것은 React JS입니다</p>
    </div>
  );
}

export default App;


// export default : 다른 파일에서 사용할 수 있도록 내보내는 부분
//                  기본적으로 내보낼 항목을 지정하는 역할을 함
//                  다른 Js에서 App.js에 있는 function App을 사용할 수 있도록 내보내기도 하지만 App.js에서 기본으로 사용할 항목을 지정하기도 함

*/