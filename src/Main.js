import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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

    const pokemonsList = pokemons && pokemons.map((pokemon, index) => {
        let id;
        if (regionName === "kanto") {
            id = index + 1;
        } else {
            id = pokemon.url.slice(42, 45);
        }
        return (
            <div key={pokemon.name} className="poke-card">
                <h3>{pokemon.name} (#{id})</h3>
                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
                    alt={pokemon.name}
                className="poke-image"/>
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