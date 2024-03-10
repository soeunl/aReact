import Header from './styles_components/SHeader'
import SSection from './styles_components/SSection'
import SAside from './styles_components/SAside'
import './App.css'
import Footer from './styles_components/SFooter'

function App() {
    const name = '코리아it'

    return (
        <div className="wrapper">
            <Header brandName={name} />
            <div className="section">
                <SSection />
                <SAside />
            </div>
            <Footer />
        </div>
    )
}

export default App
