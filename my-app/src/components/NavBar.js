import './styles/nav-bar.css';
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <>
            <nav className="navbar">
                <h1 className="logo">
                    <Link to="/">Aerify</Link>
                </h1>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/products">Products</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
        </>
    );
}

export default NavBar;