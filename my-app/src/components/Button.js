import React, { useState } from 'react'
import '../Button.css'
// 어떤 url로 이동 : a
// click 액션 : bitton

const Button = (props) => {
    const [color, setColor] = useState(false)
    // color = false;
    // color 값을 수정하려면 setColor() 를 이용해서 수정한다.

    const clickHandle = () => {
        console.log('click')
        setColor(!color)
        document.querySelector('button').style.background = 'white'
        document.querySelector('button').style.color = 'black'
    }
    return (
        <button
            onClick={clickHandle}
            onMouseOver={() => {
                console.log('mouseOver')
            }}
            style={{
                background: color ? 'black' : 'white',
                color: color ? 'white' : 'black',
            }}
        >
            {props?.text ? props.text : 'Button'}
        </button>
    )
}

export default Button
