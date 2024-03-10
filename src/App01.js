import logo from './logo.svg'
import './App.css'
import Header from './props/Props_Header'
import Footer from './props/Props_Footer'
import Section from './props/Props_Section'

function App() {
    const name = '코리아it'

    return (
        <div>
            <Header name={name} subject="frontend" age={30} />
            {/* Header(name, subject, age) */}
            <Section age={30} />
            <Footer name={name} />
        </div>
    )
}
// return은 반드시 한개

export default App
