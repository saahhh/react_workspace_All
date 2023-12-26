import React from 'react';
import ChildComponent from './ChildComponent';

//ChildComponent 에서는 prop라는 이름으로 파라미터를 전달 받는다
//prop는 무조건으로 사용해야하는 이름은 아니지만 부모에게 전달받아서 데이터를 사용한다는 의미를 지니기 때문에 부모 컴포넌트에서 전달받을 때 prop라는 이름을 사용하는게 좋음
//message와 data 또한 개발자가 정해놓은 이름일 뿐, 무조건으로 작성해야하는 이름은 아님
//(prop라는 용어는 약속어는 아니지만 개발자들간의 약속어이다 (message나 data도 마찬가지)
function ParentComponent () {
    const data = 'Hello ParentComponent';
    return <ChildComponent message={data} />;
}


export default ParentComponent;