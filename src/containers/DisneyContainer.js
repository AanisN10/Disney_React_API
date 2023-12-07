import { useState, useEffect } from 'react';
import CharacterList from '../components/CharacterList';

const DisneyContainer = () => {

    const [characters, setCharacters] = useState([])

    const fetchCharacters = async() => {
        const response = await fetch("https://api.disneyapi.dev/character");
        const data = await response.json();
        setCharacters(data.data);
        console.log(data.data)
    }

    useEffect(() => {
        fetchCharacters();
    }, []);

    return ( 
        <>
            <h2>Disney Characters</h2>
            <CharacterList characters ={characters} />
        </>
     );
}
 
export default DisneyContainer;