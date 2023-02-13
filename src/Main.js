import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Main = () => {

    const params = useParams();
    const genID = params.id;
    
    const [pokemons, setPokemons] = useState([]);
    const [regionName, setRegionName] = useState("");

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/generation/${genID}`)
            .then(res => res.json())
            .then(data => {
                setPokemons(data.pokemon_species);
                setRegionName(data.main_region.name);
            });
        
    }, [genID]);

    const pokemonsList = pokemons && pokemons.map(pokemon => {
        return (
            <div key={pokemon.name} className="poke-card">
               <Link to={`/pokemon/${pokemon.name}`} > <h3>{pokemon.name}</h3></Link>                
            </div>
        );
    });
 
    return (
        <div className="main">
            {pokemons && <h2>{regionName}</h2>}
            {pokemons && <div className="main-display">{pokemonsList}</div>}
        </div>
    );
};

export default Main;