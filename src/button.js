import PropTypes from 'prop-types';
import './style.css';


const Button = ({ color, text, onClick }) => {

const styleItem={color:'red', backgroundColor:'black'};

  return (
    <div>
      <button
        onClick={onClick}
        style={{ backgroundColor: color }}
        className='btn'
      >
        {/* {text} */}
        change background
      </button>

      <h1 className="primary">Style 1 in React</h1>

      <h1 style={{color:'red', backgroundColor:'black'}}>Style 2 in React  </h1>

      <h1 style={styleItem}>Style 3 in React  </h1>

     
    </div>



  )
}

Button.defaultProps = {
  color: 'steelblue',
}

Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
}

export default Button;