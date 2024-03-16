import React, { useState } from 'react'
// import tabs from "./Tabs.module.css";
import './Tabs.css'
import TabBtn from './TabBtn'

const Tabs = ({ tabDatas }) => {
    const [num, setNum] = useState(1)
    // 1, 2, 3, 4
    return (
        <div className="tabs-container">
            <ul className="tab-btns">
                {tabDatas.map((tab, index) => (
                    <li
                        onClick={() => {
                            setNum(index + 1)
                        }}
                        className={num === tab.id ? 'active' : ''}
                    >
                        {tab.btn_title}
                    </li>
                ))}
            </ul>
            <div className="tab-contents">
                {tabDatas.map((content) => (
                    <div
                        style={{
                            display: num === content.id ? 'block' : 'none',
                        }}
                    >
                        {content.body}
                    </div>
                ))}
                <div style={{ display: num === 1 ? 'block' : 'none' }}>
                    문서 디자인에 의미가 있는 글을 담으면 사람들은 양식을 보지
                    않고 글의 내용에 집중하는 경향이 있다.
                </div>
                <div style={{ display: num === 2 ? 'block' : 'none' }}>
                    예를 들어 "나무위키의 서버는 파라과이에 있다."
                </div>
                <div style={{ display: num === 3 ? 'block' : 'none' }}>
                    라는 문장을 적으면 대부분의 사람들은 글씨체에 집중하지 않고
                    글의 내용에 집중하게 될 것이다.
                </div>
                <div style={{ display: num === 4 ? 'block' : 'none' }}>
                    이런 일을 막고 디자인을 보여주는 데 집중하고자 어딘가
                    라틴어처럼 보이지만 실질적인 의미가 없는 단어를 조합해서
                    만든 글이다.
                </div>
            </div>
        </div>
    )
}

export default Tabs
