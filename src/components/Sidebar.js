import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {

    const [generations, setGenerations] = useState([]);

    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/generation/")
            .then(res => res.json())
            .then(data => setGenerations(data.results));
    }, []);
    
    console.log(generations)

    const generationsList = generations && generations.map((el, index) => {
        return (
            <Link to={`/generation/${index+1}`} key={el.name}>
                <li >{el.name}</li>
            </Link>
        );
    });

    return (
        <aside>
            <h2>Generations: </h2>
            {generations && <ul>{generationsList}</ul>}
        </aside>
    );
};

export default Sidebar;