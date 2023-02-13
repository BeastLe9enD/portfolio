import './App.scss';

import NavBar from "./NavBar";
import Preview from './Preview';
import About from "./About";
import Work from "./Work";
import Contact from "./Contact";
import Footer from './Footer';

function App() {
    return (
        <>
            <NavBar/>
            <main>
                <Preview/>
                <div className="content">
                    <About/>
                    <Work/>
                    <Contact/>
                    <Footer/>
                </div>
            </main>
        </>
    );
}

export default App;
