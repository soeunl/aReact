const Footer = (props) => {
    // props가 전달되지 안항도 지금은 문제 없음
    return (
        <footer>
            <address>copyright &copy; 2024 {props.name}</address>
        </footer>
    )
}

export default Footer
