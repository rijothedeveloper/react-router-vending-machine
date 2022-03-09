import { Link } from "react-router-dom"
import Navbar from "./Navbar";
import './vendingMachine.css'

const VendingMachine = () => {
    return(
        <div>
            <Navbar />
            <nav>
                <Link to="/soda">Soda</Link>
                <Link to="/chips">Chips</Link>
                <Link to="/sardines">Sardines</Link>
            </nav>
        </div>
    )
}

export default VendingMachine;