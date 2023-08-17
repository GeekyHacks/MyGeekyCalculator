import PropTypes from 'prop-types';
import React from 'react';

const Calculator = () => (
  <div id="CalculatorContainer">
    <input type="number" placeholder="0" id="CalcInput" maxLength={9} onWheel="blur()" />
    <div id="Btns">
      <button type="submit">AC</button>
      <button type="submit">+/-</button>
      <button type="submit">%</button>
      <Operators value="/" />
      <Numbers value="7" />
      <Numbers value="8" />
      <Numbers value="9" />
      <Operators value="x" />
      <Numbers value="4" />
      <Numbers value="5" />
      <Numbers value="6" />
      <Operators value="-" />
      <Numbers value="1" />
      <Numbers value="2" />
      <Numbers value="3" />
      <Operators value="+" />
      <Zero value="0" />
      <button type="submit">.</button>
      <Operators value="=" />
    </div>
  </div>
);

const Numbers = ({ value }) => <button type="submit">{value}</button>;

const Operators = ({ value }) => (
  <button className="operator" type="submit">
    {value}
  </button>
);

const Zero = ({ value }) => (
  <button id="zero" type="submit">
    {value}
  </button>
);

Numbers.propTypes = {
  value: PropTypes.string.isRequired,
};
Operators.propTypes = {
  value: PropTypes.string.isRequired,
};
Zero.propTypes = {
  value: PropTypes.string.isRequired,
};

// another way of making it

// class Calculator extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       value: '',
//       value: PropTypes.string.isRequired,
//     };
//   }

//   render() {
//     this.setState({
//       value: 'Lewis',
//     });
//     return (
//       <div>
//         <div id="CalculatorContainer">
//           <input type="number" placeholder="0" id="CalcInput" maxLength={9} onWheel="blur()" />

//           <div id="Btns">
//             <button type="submit">AC</button>
//             <button type="submit">+/-</button>
//             <button type="submit">%</button>
//             <button className="operator" type="submit">
//               {(value = '/')}
//             </button>
//             <button type="submit">{(value = '7')}</button>
//             <button type="submit">{(value = '8')}</button>
//             <button type="submit">{(value = '9')}</button>
//             <button className="operator" type="submit">
//               {(value = 'x')}
//             </button>
//             <button type="submit">{(value = '4')}</button>
//             <button type="submit">{(value = '5')}</button>
//             <button type="submit">{(value = '6')}</button>
//             <button className="operator" type="submit">
//               {(this.setState.value = '-')}
//             </button>
//             <button type="submit">{(value = '1')}</button>
//             <button type="submit">{(value = '2')}</button>
//             <button type="submit">{(value = '3')}</button>
//             <button className="operator" type="submit">
//               {(value = '+')}
//             </button>
//             <button id="zero" type="submit">
//               {(value = '0')}
//             </button>
//             <button type="submit">.</button>
//             [
//             <button className="operator" type="submit">
//               {(value = '=')}
//             </button>
//             ]
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

export default Calculator;
