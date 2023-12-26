import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './js/App';
import Count from './js/Count';
import reportWebVitals from './reportWebVitals';
import ToggleButton from './js/ToggleButton';
import IndexExample from './js/IndexExample';
import ImageChange from './js/ImageChange';
import ObjectExample from'./js/ObjectExample';
import AnimalSound from './js/Animal';
import TimerCount from './js/TimerCount';
import ExampleCallbacks from './js/ExampleCallback';
import PracticeTwo from './js/PracticeTwo';
import ParentComponent from './js/ParentComponent';
import Board from './js/Board';
import HelloWorld from './js/JSXExam';
import TagEaxm from './js/TagExam';


{/**/}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  {/* <App /> */} {/*react에서 주석은 { /* * / }로 표기함 */}   
  {/*<Count />*/}
  {/*<ToggleButton />*/}
  {/* <IndexExample />*/}
  {/*<ImageChange />*/}
  {/* <ObjectExample />*/}
  {/*  <AnimalSound />*/}
  {/* <TimerCount />*/}
  {/* <ExampleCallbacks />*/}
  {/*  <PracticeTwo />*/} 
  {/*<ParentComponent /> */}
  {/*<Board />*/}
  {/*<HelloWorld />*/}
  <TagEaxm />
  </React.StrictMode>

);
reportWebVitals();

//React.StrictMode : react 내부에서 잠재적인 문제가 있는지 알아내기 위한 도구
//reportWebVitals : react 성능 측정하기 위한 메서드
