function Header(props) {
    const ary = [1, 2, 3, 4, 5]
    const obj = {
        user_id: 'jemicom',
        user_pw: '12345',
    }
    console.log(props)
    // {name: '파리바게트', subject: 'frontend', age: 30}

    const header = (
        <header>
            {/* 
            <h1>{256}</h1>
            <h1>{"HELLO !!"}</h1>
            <h1>{ary}</h1>
            <h1>{ary.toString()}</h1>
            <h1>{JSON.stringify(obj)}</h1>  */}
            <h1>{props.name}</h1>
            <h1>{props.age}</h1>
        </header>
    )
    return header
}

export default Header
