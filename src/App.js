import React, { useState } from 'react';
import Calculator from './components/Calculator';
import Contact from './components/Contact';
import QuoteApi from './components/NinjaAPI';
import Footer from './components/Footer';
import './Styles/Css/App.css';

function App() {
  const [resourceType, setResourceType] = useState('Calculator');

  const renderComponent = () => {
    if (resourceType === 'QuoteApi') {
      return <QuoteApi />;
    } if (resourceType === 'Contact') {
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

// import Calculator from './components/Calculator';
// import Header from './components/Header';
// import Footer from './components/Footer';
// import QuoteApi from './components/NinjaAPI';
// import './Styles/Css/App.css';
// import React, { useState, useEffect } from 'react';
// const componentsArray = [Calculator, QuoteApi];

// const category = 'success';
// const apiKey = 'HDkAqbGgWzD4ApoIUqCl1Q==77tdi7Q7T8rjLfPB';

// function App() {
//   const [resourceType, setResourceType] = useState('Calculator');
//   const [item, setItem] = useState([]);

//   useEffect(() => {
//     componentsArray.forEach((component) => {
//       if (component === componentsArray[0]) {
//         component = resourceType;
//         console.log(component);
//         return <QuoteApi />;
//       } else {
//         console.log(component);
//         return <Calculator />;
//       }
//     });
//   }, [resourceType]);

//   return (
//     <>
//       <header>
//         <nav>
//           <div className="navBar">
//             <h2>Geeky Calculator</h2>
//             <div>
//               <button className="link" id="listBtn" onClick={() => setResourceType('QuoteApi')}>
//                 Quotes
//               </button>

//               <span>|</span>

//               <a className="link" id="addNewBook" href={Calculator}>
//                 Calculator
//               </a>
//               <span>|</span>
//               <a href={Calculator} className="link" id="contactBtn">
//                 Contact
//               </a>
//             </div>
//           </div>
//         </nav>
//       </header>
//       <div id='mainSect'></div>
//     </>
//   );

//   // return (
//   //   <div className="App">
//   //     <Header />
//   //     <QuoteApi />
//   //     <Footer />
//   //   </div>
//   // );
// }

// export default App;

// links.forEach((link) => {
//   link.addEventListener('click',  handleClick=()=> {
//     if (this.id === 'listBtn') {
//       listpage();
//     }
//     if (this.id === 'addNewBook') {
//       addBook();
//     }
//     if (this.id === 'contactBtn') {
//       contact();
//     }
//     return link;
//   });
// });

// working function
// function App() {
//   const [data, setQuotes] = useState([])
// const [hasError, setHasError] = useState(false)
// const [isLoading, setIsLoading] = useState(false)

// useEffect(() => {
//   const fetchData = async () => {
//     setIsLoading(true)
//     try {
//       const res = await fetch("https://jsonplaceholder.typicode.com/todos")
//       const json = await res.json()
//       setQuotes(json)
//     } catch (error) {
//       setHasError(true)
//     }
//     setIsLoading(false)
//   }
//   fetchData()
// }, [setQuotes, setIsLoading])

// if (hasError) return <div>Something went wrong!</div>

// if (isLoading) return <div>Loading...</div>

// return (
//   <ul>
//     {data.map((item) => (
//       <li key={item.id}>{item.title}</li>
//     ))}
//   </ul>
// )

// return (
//   <div className="App">
//     <Header />
//     <Calculator />
//     <Footer />
//   </div>
// );
