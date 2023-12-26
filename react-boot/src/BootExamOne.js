import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
function App() {
  return (
    <div className='App'>
      <header className='bg-dark text-light py-5'>
        <h1>리액트 부트스트랩 사이트</h1>
      </header>
      {/*
      bg-dark
      bg : background 배경색
      -dark : 검정

      text-light : 글자색 흰색으로 설정

      py-5
      py : padding-y
      y : 위 아래 여백을 조절하는 값
      x : 좌 우 여백을 조절하는 값
      부트스트랩에서 패딩을 상하좌우 주고싶다면 px-1 py-1해서 숫자 조절해주면
      BootStrap : 여백의 크기를 1~5까지 5단계

      container : 본문을 담을 컨테이너를 생성
      mt-4 : mt는 margin top을 나타냄
      margin-top : 본문에 위 크기를 조정하는 것
      -4 : 상단 마진을 4단위로 설정하겠다는 것
      row : 컬럼을 나열하는데 사용 (한 줄을 나타냄, 컬럼은 12개를 나타냄)

      col-md-6
      col : column 컬럼의 약자
      md : medium 중간 화면 크기
      6 : 6개의 컬럼을 차지
          보통 한 줄의 컬럼은 12개로 구성되어있음
      
      */}
      <main className='container mt-4'> {/* mt = margin top */}
        <div className='row'>
          <div className='col-md-4'>
            <h2>하나</h2>
            <p>이것은 하나입니다.</p>
          </div>
          <div className='col-md-4'>
            <h2 className='text-center'>둘</h2>
            <p>이것은 둘입니다.</p>
          </div>
          <div className='col-md-4'>
            <h2>셋</h2>
            <p>이것은 셋입니다.</p>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-4'>
            <h2>하나</h2>
            <p>이것은 하나입니다.</p>
          </div>
          <div className='col-md-4'>
            <h2>둘</h2>
            <p>이것은 둘입니다.</p>
          </div>
          <div className='col-md-4'>
            <h2>셋</h2>
            <p>이것은 셋입니다.</p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
