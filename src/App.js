import React, { useState } from 'react';
import QuoteApi from './components/NinjaAPI';
import Contact from './components/Contact';
import Calculator from './components/Calculator';
import Footer from './components/Footer';
import './Styles/Css/App.css';

function App() {
  const [resourceType, setResourceType] = useState('Calculator');

  const renderComponent = () => {
    if (resourceType === 'QuoteApi') {
      return <QuoteApi />;
    }
    if (resourceType === 'Contact') {
      return <Contact />;
    }
    return <Calculator />;
  };

  return (
    <>
      <header>
        <nav>
          <div className="navBar">
            <h2>Geeky Calculator</h2>
            <div>
              <button type="button" className="link" id="listBtn" onClick={() => setResourceType('QuoteApi')}>
                Quotes
              </button>
              <span>|</span>
              <button type="button" className="link" id="addNewBook" onClick={() => setResourceType('Calculator')}>
                Calculator
              </button>
              <span>|</span>
              <button type="button" className="link" id="addNewBook" onClick={() => setResourceType('Contact')}>
                Contact
              </button>
            </div>
          </div>
        </nav>
      </header>
      <div id="mainSect">
        {renderComponent()}
        {' '}
        {/* Render the selected component */}
      </div>
      <Footer />
    </>
  );
}

export default App;
