import { useState, useEffect } from 'react';
import CharacterList from '../components/CharacterList';
import SearchCharacter from '../components/SearchCharacter';
import {useNavigate} from "react-router-dom";

const DisneyContainer = () => {

    const navigate = useNavigate();

    const [characters, setCharacters] = useState([])
    const [filteredCharacters, setFilteredCharacters] = useState([])

    const fetchCharacters = async() => {
        const response = await fetch("https://api.disneyapi.dev/character?pageSize=403");
        const data = await response.json();
        setCharacters(data.data);
        setFilteredCharacters(data.data);
        console.log(data.data)
    }

    useEffect(() => {
        fetchCharacters();
    }, []); 

    // function to filter characters
    const handleSearch = (characterInput) => {
        const filter = characters.filter((character) => character.name.toLowerCase().includes(characterInput.toLowerCase()))
        setFilteredCharacters(filter)
        console.log(filter);
    }





    return ( 
        <>
            {/* <nav>
                <ul>
                    <Link to="/">Disney Home</Link>
                </ul>
            </nav> */}
            {/* <button onClick={() => navigate('/')}>Go to Disney Home</button> */}
            <h2>Disney Characters</h2>
            <SearchCharacter handleSearch={handleSearch} /> 
            {filteredCharacters.length > 0 ? (<CharacterList characters={filteredCharacters}/>) : (<p>No matching characters found.</p>)}
             {/* <Outlet></Outlet> */}
            
        </>
     );
}
 
export default DisneyContainer;