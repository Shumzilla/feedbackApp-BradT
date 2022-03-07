import PropTypes from 'prop-types';

function Card({ children, reverse }) {
  return (
    <div className='card' style={{ backgroundColor: reverse ? '#FFF' : '#FFF', color: reverse ? '#2E3060' : '#000' }}>
      {children}
    </div>
  );
}

Card.defaultProps = {
  reverse: true,
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  reverse: PropTypes.bool,
};

export default Card;
