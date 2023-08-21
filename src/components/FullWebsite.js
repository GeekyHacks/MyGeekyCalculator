import React, { useState } from 'react';
import Home from './Home';
import QuoteApi from './NinjaAPI';
import Contact from './Contact';
import Calculator from './Calculator';

import '../Styles/Css/App.css';

function FullWebsite() {
  const [resourceType, setResourceType] = useState('Home');

  const renderComponent = () => {
    if (resourceType === 'QuoteApi') {
      return <QuoteApi />;
    }
    if (resourceType === 'Contact') {
      return <Contact />;
    }
    if (resourceType === 'Home') {
      return <Home />;
    }
    if (resourceType === 'Calculator') {
      return <Calculator />;
    }

    return (
      <div className="mainSect">
        {' '}
        <Home />
      </div>
    );
  };

  return (
    <>
      <header>
        <nav>
          <div className="navBar">
            <h2>Geeky Calculator</h2>
            <div>
              <button type="button" className="link" id="addNewBook" onClick={() => setResourceType('Home')}>
                Home
              </button>
              <span>|</span>
              <button type="button" className="link" id="addNewBook" onClick={() => setResourceType('Calculator')}>
                Calculator
              </button>
              <span>|</span>
              <button type="button" className="link" id="listBtn" onClick={() => setResourceType('QuoteApi')}>
                Quotes
              </button>
              <span>|</span>
              <button type="button" className="link" id="addNewBook" onClick={() => setResourceType('Contact')}>
                Contact
              </button>
            </div>
          </div>
        </nav>
      </header>
      <div className="mainSect">
        {/* Render the selected component */}
        {renderComponent()}
      </div>
    </>
  );
}

export default FullWebsite;
