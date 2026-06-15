import { link } from "react-router-dom";

function NavBar() {
    return (
        <nav>
            <h2>Anette Söderström</h2>
            <ul>
                <li><link to="/">Home</link></li>
                <li><link to="/about">About</link></li> 
                <li><link to="/skills">Skills</link></li>
                <li><link to="/experience">Experience</link></li>
                <li><link to="/projects">Projects</link></li>
                <li><link to="/contact">Contact</link></li>
            </ul>
        </nav>
    );
}
export default NavBar;