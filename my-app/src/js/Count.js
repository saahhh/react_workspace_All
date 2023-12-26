import React, {useState} from 'react';
import rupy from '../img/IMG_6576.png'
//증가시키는 함수
function AddCount() { //함수를 import할 땐 첫 글자를 대문자로 써준다
  //useState를 활용해서 값 증가하는 함수를 완성할 것
  {/*js공간*/}
  const [count, setCount] = useState("0");

  const increment = () => {
    setCount(count + 1);
  }

  return (
    <div> {/*html공간*/}
        <h1>숫자 : {count}</h1>
        <button onClick={increment}>클릭</button>
    </div>
  )
}

function Count() {
    return(
        <div>
            <img src={rupy} width={300} height={300}></img>
            <AddCount />
        </div>
    )
}


export default Count;
