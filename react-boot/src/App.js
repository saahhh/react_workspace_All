import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import logo from './img/i11.jpg'

function App() {
  return (
    <div className='App'>
      <header className='bg-dark text-light py-5'>
        <h1>리액트 부트스트랩 사이트</h1>
      </header>
      {/*
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
      
      mb-5 
      mb : margin buttom
      */}
      <main className='container mt-4'> {/* mt = margin top */}
        <section className='mb-5'>
          <div className='row'>
            <div className='col-md-6'>
              <img className='img-fluid' src={logo} />
            </div>
            <div className='col-md-6'>
              <h2>About</h2>
              <p>망곰</p>
            </div>
          </div>
        </section>
        <section className='mb-5'>
          <h2 className='mb-4'>카드시작</h2>
          <div className='row'>
            <div className='col-md-4 mb-4'>
              <div className='card'>
                <div className='card-body'>
                  <h5 className='card-title'>카드1</h5>
                  <p className='card-text'>
                    카드1번입니다
                  </p>
                </div>
              </div>
            </div>
            <div className='col-md-4 mb-4'>
              <div className='card'>
                <div className='card-body'>
                  <h5 className='card-title'>카드2</h5>
                  <p className='card-text'>
                    안녕하세요. 카드2입니다.
                  </p>
                </div>
              </div>
            </div>
            <div className='col-md-4 mb-4'>
              <div className='card'>
                <div className='card-body'>
                  <h5 className='card-title'>카드3</h5>
                  <p className='card-text'>
                    안녕하세요. 카드3입니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <h2 className='text-center mb-4'>Contact Us</h2>
          <form>
            <div className='mb-3'>
              <label className='form=label'>
                Name
              </label>
              <input type='text' className='form-control' id='name' />
            </div>
            <div className='mb-3'>
              <label className='form-label'>
                Email
              </label>
              <input type="email" className='form-control'
                aria-describedby='emailSmall' />
              <small id="emailSmall" className='form-text text=muted'>이메일</small>
            </div>
            <div className='mb-3'>
              <label className='form-label'>
                메세지 작성
              </label>
              <textarea rows="4" className='form-control'></textarea>
            </div>
            <button className='btn btn-primary mb-3'>
              전송하기
            </button>
          </form>
        </section>
      </main>
      <footer className='bg-dark text-light text-center r py-3'>
        <p>&copy; 2023 My React Site</p>
      </footer>
    </div>
  );
}

export default App;


//<header className='App-header'>