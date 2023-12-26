import "./App.css";
//import ThemeContext from "./ContextExamOne";
//import ChildComponent from "./ChildComponent";
//import ReducerCount from "./ReducerCount";
//import UserInfo from "./UserInfo";
//import ChildTwoComponent from "./ChildTwoComponent";
import { ThemeProvider } from "./ThemeContext";
import ThemeToggleButton from "./ThemeToggleButton";
//import YTBAPI from "./YTBAPI";
import Quiz from "./Quiz";
import NumberGuessingGame from "./NumberGuessingGame";
import NumberGuessingGameLimit from "./NumberGuessingGameLimit";

//Provider : 해당컴포넌트를 통해서 ThemeContext안에 있는 컴포넌트들한테 객체 값을 공유하고 읽을 수 있도록 해줌
function App() {
  return (
    <div>
      {/* <YTBAPI /> */}
      <NumberGuessingGameLimit />
    </div>
  );
}

export default App;

/*
< ThemeContext.Provider value={theme}>
<ChildComponent />
<UserInfo />
<ChildTwoComponent />


    <ThemeProvider>
      <div>
        <h1>테마변경</h1>
        <ThemeToggleButton />
      </div>
    </ThemeProvider>

*/
