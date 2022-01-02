import Header from './Header.js'
import Content from './Content.js'

export default function HomePage(props) {
    return (
        <div className="App">
            <Header/>
            <Content/>
            <div className="footer"></div>
        </div>
    );
}