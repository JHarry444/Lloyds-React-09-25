import { useContext } from "react";
import { Link } from "react-router";
import {ThemeContext} from "../../themeContext";

export default function Navigation() {

    const {theme, toggleTheme} = useContext(ThemeContext);
    return (
        <nav>
            <Link to="/" className={theme}>Home</Link>
            <Link to="/images" className={theme}>Images</Link>
            <Link to="/components" className={theme}>Components</Link>
            <Link to="/props" className={theme} >Props</Link>
            <Link to="/external" className={theme}>External Data</Link>
            <Link to="/params/:name" className={theme}>Route Params</Link>
            <Link to="/search" className={theme} >Search Params</Link>
            <Link to="/events" className={theme}>Event Handling</Link>
            <Link to="/state" className={theme}>State</Link>
            <button onClick={toggleTheme}>{theme}</button>
        </nav>
    )
}