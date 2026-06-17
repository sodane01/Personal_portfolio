import { NavLink } from "react-router-dom";

function NavBar() {
    return (
        <nav>
            <h2>Anette Söderström</h2>
            <ul>
                <li><NavLink to="/" end>Home</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li> 
                <li><NavLink to="/skills">Skills</NavLink></li>
                <li><NavLink to="/experience">Experience</NavLink></li>
                <li><NavLink to="/projects">Projects</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
            </ul>
        </nav>
    );
}
export default NavBar;