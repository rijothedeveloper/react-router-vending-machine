import { NavLink } from "react-router-dom";
import './navbar.css'
const Navbar = () => {
    return(
        <div className="navbar">
            <NavLink to="/soda">Soda</NavLink>
            <NavLink to="/chips">Chips</NavLink>
            <NavLink to="/sardines">Sardines</NavLink>
        </div>
    )
}

export default Navbar;