import PropTypes from 'prop-types';

const Screen = ({ total, next }) => {
  let display = '';
  if (next) {
    display = next;
  } else if (total) {
    display = total;
  } else {
    display = '0';
  }

  return <div id="CalcInput">{display}</div>;
};

Screen.propTypes = {
  total: PropTypes.string.isRequired,
  next: PropTypes.string.isRequired,
};

export default Screen;
