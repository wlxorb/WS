import React, { useState } from 'react';
import './MyComponent.scss';

const MyComponent = () => {
    const [message, setMessage] = useState('');

    const onChangeMessageEvent = (e) => {
        console.log(e);
        setMessage(e.target.value);
    };

    const onClick = () => {
        alert(message);
        setMessage('');
    };

  return (
    <>
        <input placeholder='입력해주세요' value={message} onChange={onChangeMessageEvent}/>
        <button onClick={onClick}>버튼</button>  {/*클릭해야만 메시지 나오도록. 화살표안해놓으면 계속 업데이트 */}
        <div className="Template">
            {message}
        </div>
    </>
  );
}

export default MyComponent