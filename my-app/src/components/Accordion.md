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

const Accordion = () => {
const [clickState, setClickState] = useState(false)
return (
<div className={ac.acContainer}>
<div className={ac.acContent}>
<div
className={ac.acTitle}
onClick={() => {
setClickState(!clickState)
}} >
안 쓰면 정말 환불해 주나요?
</div>
<div className={clickState ? ac.acBodyHeight : ac.acBody}>
물론입니다. 결제 후 콘텐츠
</div>
</div>
</div>
)
}

export default Accordion
