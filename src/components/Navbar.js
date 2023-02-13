import { Link } from "react-router-dom";

const Navbar = () => {
     
    return (
        <nav>
            <h1>Pokedex</h1>
            <Link to={"/"}><li>Home</li></Link>
        </nav>
    );
};

export default Navbar;