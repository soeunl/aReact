````Button js

import React from 'react'
import '../Button.css'
// 어떤 url로 이동 : a
// click 액션 : bitton

const Button = (props) => {
// undefined, null === false, text === true
// return <button>{props.text === undefined ? 'Button' : props.text}</button>

    // ?. : 오션널채인
    return <button>{props?.text ? props.text : 'Button'}</button>

}

export default Button

``` App.js

const App = () => {
    const btnTexts = ['주식', '영어', '고전', '인테리어', '다이어트']

    return (
        <div>
            {/* <Button />
            <Button text="주식" />
            <Button text="영어" />
            <Button text="고전" />
            <Button text="인테리어" />
            <Button text="다이어트" /> */}
            {btnTexts.map((text) => (
                <Button text={text} />
            ))}
        </div>
    )
}

export default App
````

# state (상태)

-   상태에 따라서 화면이 바뀐다.

마우스 오버, 마우스 아웃, 마우스 클릭하여
화면에 변화가 있다.
react의 변수를 사용해야 한다.

let num = 0;
let [ num, setNum ] = useState(0)

# 이벤트 핸들러

$("button").on("click", function)
button.addeventListener("click", function)

// 파라미터가 없는 경우
onClick={callback}

// 파라미터가 있는 경우
onclick={()=>{callback(event)}}

# Button.js 이벤트 핸들 사용

const Button = (props) => {
const clickHandle = () => {
console.log('click')
}
return (
<button
onClick={clickHandle}
onMouseOver={() => {
console.log('mouseOver')
}} >
{props?.text ? props.text : 'Button'}
</button>
)
}

export default Button

# hook

React : js 클래스 => js 함수 컴포넌트에서 사용할 수 있는 특별한 기능을 구현해 둔 함수
