import { Link } from 'react-router-dom';
import { FaRegCopyright } from "react-icons/fa";
import { GiCakeSlice } from "react-icons/gi";

const Footer = () => {
  return (
    <footer>
      <p>Copyright <FaRegCopyright /> 2021</p>
      <Link to='/about'>About us <h2><GiCakeSlice /></h2></Link>
    </footer>
  )
}

export default Footer;