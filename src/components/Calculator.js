import PropTypes from 'prop-types';
import React, { useState } from 'react';
import calculate from '../logic/calculate';
import Screen from './Screen';

const Calculator = () => {
  const [state, setState] = useState({
    total: null,
    next: null,
    operation: null,
  });

  return (
    <div id="CalculatorContainer">
      <Screen total={state.total} next={state.next} />
      <div id="Btns">
        <button type="button" onClick={() => setState(calculate(state, 'AC'))}>
          AC
        </button>
        <button type="button" onClick={() => setState(calculate(state, '+/-'))}>
          +/-
        </button>
        <button type="button" onClick={() => setState(calculate(state, '%'))}>
          %
        </button>
        <Operators value="÷" onClick={() => setState(calculate(state, '÷'))} />
        <Numbers value="7" onClick={() => setState(calculate(state, '7'))} />
        <Numbers value="8" onClick={() => setState(calculate(state, '8'))} />
        <Numbers value="9" onClick={() => setState(calculate(state, '9'))} />
        <Operators value="x" onClick={() => setState(calculate(state, 'x'))} />
        <Numbers value="4" onClick={() => setState(calculate(state, '4'))} />
        <Numbers value="5" onClick={() => setState(calculate(state, '5'))} />
        <Numbers value="6" onClick={() => setState(calculate(state, '6'))} />
        <Operators value="-" onClick={() => setState(calculate(state, '-'))} />
        <Numbers value="1" onClick={() => setState(calculate(state, '1'))} />
        <Numbers value="2" onClick={() => setState(calculate(state, '2'))} />
        <Numbers value="3" onClick={() => setState(calculate(state, '3'))} />
        <Operators value="+" onClick={() => setState(calculate(state, '+'))} />
        <Zero value="0" onClick={() => setState(calculate(state, '0'))} />

        <button type="button" onClick={() => setState(calculate(state, '.'))}>
          .
        </button>
        <Operators value="=" onClick={() => setState(calculate(state, '='))} />
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

const Zero = ({ value, onClick }) => (
  <button id="zero" type="button" onClick={onClick}>
    {value}
  </button>
);

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
