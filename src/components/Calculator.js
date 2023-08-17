import PropTypes from 'prop-types';
import React, { useState } from 'react';
import calculate from '../logic/calculate';
// import operate from '../logic/operate.js';
const Calculator = () => {
  const [inputValue, setInputValue] = useState('');

  const handleNumberClick =  (value) => {
    if (value === '=') {
      try {
        const result =  calculate(inputValue);
        console.log(inputValue);
         setInputValue(result.toString());
      } catch (error) {
        setInputValue('Error');
      }
    } else {
      setInputValue((prevValue) => prevValue + value);
    }
  };
  // const handleOperatorClick = (prevValue, value, operation) => {
  //   operate(prevValue, value, operation);
  // };
  const handleClear = () => {
    setInputValue('0');
  };
  return (
    <div id="CalculatorContainer">
      <input type="text" value={inputValue} id="CalcInput" readOnly />{' '}
      <div id="Btns">
        <button type="submit" onClick={() => handleClear('0')}>
          AC
        </button>
        <button type="submit">+/-</button>
        <button type="submit">%</button>
        <Operators value="/" onClick={() => handleNumberClick('/')} />
        <Numbers value="7" onClick={() => handleNumberClick('7')} />
        <Numbers value="8" onClick={() => handleNumberClick('8')} />
        <Numbers value="9" onClick={() => handleNumberClick('9')} />
        <Operators value="x" onClick={() => handleNumberClick('x')} />
        <Numbers value="4" onClick={() => handleNumberClick('4')} />
        <Numbers value="5" onClick={() => handleNumberClick('5')} />
        <Numbers value="6" onClick={() => handleNumberClick('6')} />
        <Operators value="-" onClick={() => handleNumberClick('-')} />
        <Numbers value="1" onClick={() => handleNumberClick('1')} />
        <Numbers value="2" onClick={() => handleNumberClick('2')} />
        <Numbers value="3" onClick={() => handleNumberClick('3')} />
        <Operators value="+" onClick={() => handleNumberClick('+')} />
        <Zero value="0" onClick={() => handleNumberClick('0')} />
        <button type="submit">.</button>
        <Operators value="=" onClick={() => handleNumberClick('=')} />
      </div>
    </div>
  );
};

const Numbers = ({ value, onClick }) => (
  <button type="button" onClick={onClick}>
    {value}
  </button>
);

const Operators = ({ value, onClick }) => (
  <button className="operator" type="button" onClick={onClick}>
    {value}
  </button>
);

const Zero = ({ onClick, value }) => (
  <button id="zero" type="submit" onClick={onClick}>
    {onClick} {value}
  </button>
);

// Calculator.propTypes = {
//   calculate: PropTypes.func.isRequired,
//   operate: PropTypes.func.isRequired,
// };

Numbers.propTypes = {
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

Operators.propTypes = {
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

Zero.propTypes = {
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Calculator;

// import PropTypes from 'prop-types';
// import React from 'react';
// import calculate  from '../logic/calculate.js';
// import operate from '../logic/operate.js';
// const Calculator = () => (
//   <div id="CalculatorContainer">
//     <input type="number" placeholder="0" id="CalcInput" maxLength={9} />
//     <div id="Btns">
//       <button type="submit">AC</button>
//       <button type="submit">+/-</button>
//       <button type="submit">%</button>
//       <Operators value="/" />
//       <Numbers value="7" />
//       <Numbers value="8" />
//       <Numbers value="9" />
//       <Operators value="x" />
//       <Numbers value="4" />
//       <Numbers value="5" />
//       <Numbers value="6" />
//       <Operators value="-" />
//       <Numbers value="1" />
//       <Numbers value="2" />
//       <Numbers value="3" />
//       <Operators value="+" />
//       <Zero value="0" />
//       <button type="submit">.</button>
//       <Operators value="=" />
//     </div>
//   </div>

// );

// const Numbers = ({ value }) => <button type="submit">{value}</button>;

// const Operators = ({ value }) => (
//   <button className="operator" type="submit">
//     {value}
//   </button>
// );

// const Zero = ({ value }) => (
//   <button id="zero" type="submit">
//     {value}
//   </button>
// );

// Numbers.propTypes = {
//   value: PropTypes.string.isRequired,
// };
// Operators.propTypes = {
//   value: PropTypes.string.isRequired,
// };
// Zero.propTypes = {
//   value: PropTypes.string.isRequired,
// };

// export default Calculator;
