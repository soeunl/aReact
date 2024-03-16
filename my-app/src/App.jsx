// JavaScript + Xml(html) : 순수 js 아니라서 브라우저가 해석하지 못하므로
// 가독성 때문에 화살표 함수 사용

import React from 'react'
import Button from './components/Button'
import Counter from './components/Counter'
import ALink from './components/ALink'
import Tabs from './components/Tabs'
import Accordion from './components/Accordion'

const App = () => {
    const btnTexts = ['주식', '영어', '고전', '인테리어', '다이어트']
    const datas = [
        {
            id: 1,
            title: '가입 후 보장은 언제 시작되나요?',
            body: '상해치료는 가입 당일부터 보장이 가능하며, 질병의 경우 가입 후 31일부터 보장이 가능합니다.',
        },
        {
            id: 2,
            title: '슬관절,고관절 및 피부병,구강질환보장이 궁금합니다.',
            body: '가입 전 슬관절,고관절 및 피부병,구강질환으로 진단받은 적이 있으시면 가입이 불가능합니다',
        },
        {
            id: 3,
            title: '보장내용은 어떻게 되나요?',
            body: '기본적으로 지출하신 의료비의 70% 보장이 가능하며, 가입시 선택하신 자기부담금을 먼저 공제합니다.',
        },
        {
            id: 4,
            title: '가입 연령은 어떻게 되나요?',
            body: '생후 2개월부터 5세까지만 가입이 가능합니다.',
        },
    ]

    const tabDatas = [
        {
            id: 1,
            btn_title: 'btn_1',
            body: `문서 디자인에 의미가 있는 글을 담으면 사람들은 양식을 보지
        않고 글의 내용에 집중하는 경향이 있다.`,
        },
        {
            id: 2,
            btn_title: 'btn_2',
            body: `물론 의미 없이 아무런 글자를 무작위로 입력할 수도 있지만 그런 텍스트는 아름답지도 않고 폰트나 레이아웃은 글 내용의 무질서함에 가려져 보이지 않을 것이다. 예를 들어 "askfiofsikf"같이 아무렇게나 입력한 문자열로 폰트를 평가한다면 폰트, 레이아웃은 보이지 않고 애들 장난같이 보일 것이다.`,
        },
        {
            id: 3,
            btn_title: 'btn_3',
            body: `그렇기 때문에 로렘 입숨처럼 적당히 정갈하면서도 전 세계 어떤 모국어 화자도 무슨 내용인지 이해할 수 없는(달리 말해 주의를 빼앗기지 않을) 문장을 사용해야 한다.`,
        },
        {
            id: 4,
            btn_title: 'btn_4',
            body: `일부 워드프로세서나 디자인 소프트웨어에는 로렘 입숨을 자동으로 생성해 주는 기능이 있다. 마이크로소프트 오피스에서는 =lorem()을 입력하고 엔터를 누르면 된다. 단락과 문장 갯수를 지정할 수 있는데 괄호 안에 쉼표로 구분해서 두 숫자를 입력하면 된다. `,
        },
    ]

    return (
        <div>
            <header>header</header>
            <section
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px',
                }}
            >
                <Tabs tabDatas={tabDatas} />

                {datas.map((data) => (
                    <Accordion title={data.title} body={data.body} />
                ))}
            </section>
            <footer>footer</footer>
        </div>
    )
}

export default App
