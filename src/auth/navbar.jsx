import { Link } from "react-router-dom";
import "./navbar.css"
import logo from '../assets/log.jpeg'
 const Navbar  = () =>
   {
    return(
        <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo}alt="Logo" />
      </div>
      <div className="navbar-buttons">
        <button className="btn btn-primary"><Link to="/">Login</Link></button>
        <button className="btn btn-outline-primary"><Link to="/signup">sign-up</Link></button>
      </div>
    </nav>
    )
   } 

   export default Navbar;