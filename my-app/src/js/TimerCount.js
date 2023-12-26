//TimerCount.js
import React, {useState, useEffect} from "react";

function Timer() {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1)
    }

    const decrement = () => {
        setCount(count - 1)
    }

    useEffect(() => {
        document.title = `남은티켓 : ${count}`;
    });

    /*
        <button onClick={() => setCount(count + 1)}
    
        위 버튼 클릭과 const increment로 작성해준 메서드는 동일한 효능을 지닌다.
        
        const increment = () => {
            setCount(count + 1);
        }
        
    */


    return (
        <div>
            <p>{count}</p>
            <button onClick={increment}>
                증가 
            </button>
            <button onClick={decrement}>
                감소
            </button>
        </div>
    );
}

export default Timer;