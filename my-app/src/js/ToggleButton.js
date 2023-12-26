import React, {useState} from "react";

function ToggleButton() {
    //script공간                    false = off, true = on
    const [isOn, setIsOn] = useState(false);

    const toggle = () => {
        setIsOn(!isOn);
    }

    return(
        <div>
            {/* 만약에 버튼이 true이면 글자로 On이라는 글자가 표시될 수 있도록 삼항연산자를 이용해서 표기 
                삼항연산자란 어떤값 ? true이면 나타날 상태
                                   : false면 나타날 상태
            */}
            <p>버튼 상태 : {isOn ? 'On' : 'Off'} </p>
            <button onClick={toggle}>버튼 상태 변경하기</button>
        </div>
    )
}

export default ToggleButton;