// props = {name, age, subject}
const Section = ({ age }) => {
    const str = ''

    return (
        <section>
            <h2>성인 인증{age}</h2>
            <p>
                {
                    // if(age>=20){str ='성인입니다.'} else{str = '20세 이상만 입장가능합니다.'}
                    age >= 20 ? '성인입니다.' : '20세 이상만 입장 가능합니다'
                }
            </p>
        </section>
    )
}

export default Section
