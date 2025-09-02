import { Link } from "react-router";

export default function Navigation() {
    return(
        <nav>
            <Link to="/">Home</Link>
            <Link to="/props">Props</Link>
        </nav>
    )
}