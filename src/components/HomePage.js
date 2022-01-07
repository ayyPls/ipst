import Header from './Header.js'
import Content from './Content.js'
import Footer from './Footer.js';

export default function HomePage(props) {
    return (
        <div className="App">
            <Header />
            <Content />
            <Footer />
        </div>
    );
}