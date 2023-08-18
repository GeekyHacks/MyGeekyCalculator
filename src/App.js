import Calculator from './components/Calculator';
import Header from './components/Header';
import Footer from './components/Footer';
import './Styles/Css/App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Calculator />
      <Footer />
    </div>
  );
}

export default App;

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
