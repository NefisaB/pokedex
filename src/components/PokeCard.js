import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

const PokeCard = () => {

    const params = useParams();
    const name = params.name;

    const [pokemon, setPokemon] = useState({});
    const [isShiny, setIsShiny] = useState(false);

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
            .then(res => res.json())
            .then(data => {
                setPokemon({
                    id: data.id,
                    name: data.name,
                    image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`,
                    shiny_image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/${data.id}.png`
                });
            });
    }, [name]);

    const toggleShiny = () => {
        setIsShiny(prevState => !prevState);
    };
    
    return (
        <div className="card">
            {pokemon &&
                <div className="poke-card">
                    <h3>{pokemon.name} (#{pokemon.id})</h3>
                    <img src={isShiny ? pokemon.shiny_image : pokemon.image} alt={pokemon.name} className="poke-image" />
                    <button onClick={toggleShiny} >{isShiny ? "Regular Form" : "Shiny form"}</button>
                </div>
            }
        </div>
    );
}


export default PokeCard