import { Link } from "react-router";

export default function Navigation() {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/images">Images</Link>
            <Link to="/components">Components</Link>
            <Link to="/props">Props</Link>
            <Link to="/external">External Data</Link>
            <Link to="/params/:name">Route Params</Link>
            <Link to="/search">Search Params</Link>

        </nav>
    )
}