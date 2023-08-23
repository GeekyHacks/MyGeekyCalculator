import { Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import QuoteApi from './components/NinjaAPI';
import Contact from './components/Contact';
import Calculator from './components/Calculator';
import Footer from './components/Footer';
import './Styles/Css/App.css';

function App() {
  return (
    <div className="fullWebsite">
      <div className="App">
        <nav className="navBar">
          <h2>Geeky Calculator</h2>
          <div>
            <Link className="link" to="/home">
              Home
            </Link>
            <span>|</span>
            <Link className="link" to="/calculator">
              Calculator
            </Link>
            <span>|</span>
            <Link className="link" to="/quotes">
              Quotes
            </Link>

            <span>|</span>
            <Link className="link" to="/contact">
              Contact
            </Link>
          </div>
        </nav>

        <Routes>
          {/* <Route index element={<Home />} /> */}
          <Route path="MyGeekyCalculator/" element={<Home />} />
          <Route path="MyGeekyCalculator/calculator" element={<Calculator />} />
          <Route path="MyGeekyCalculator/quotes" element={<QuoteApi />} />
          <Route path="MyGeekyCalculator/contact" element={<Contact />} />
          <Route path="MyGeekyCalculator/home" element={<Home />} />
          <Route path="/*" element={<div className="notFound"> Page not found!! </div>} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
