// 기본을 사용할 줄 알아야 라이브러리를 사용할 수 있음
// React-Query
// MUI 머티리얼 디자인
// react-boot-Strap

import React, { useState } from 'react'
import ac from './Accordion.module.css'
// 디자인 3번째 방법
// 디자인 방법을 달리하고 있음
// module.css 파일은 -를 사용할 수 없음
// 디자인 겹침 현상을 극복할 수 있음

// 디자인 컴포넌트 : styled-components
// 제일 나중에 사용

const Accordion = ({ title, body }) => {
    const [clickState, setClickState] = useState(false)
    return (
        <div className={ac.acContainer}>
            <div className={ac.acContent}>
                <div
                    className={ac.acTitle}
                    onClick={() => {
                        setClickState(!clickState)
                    }}
                >
                    {title}
                </div>
                <div className={clickState ? ac.acBodyHeight : ac.acBody}>
                    {body}
                </div>
            </div>
        </div>
    )
}

export default Accordion
