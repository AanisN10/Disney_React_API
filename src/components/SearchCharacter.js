import { useState } from 'react';
import "../styles.css" 


const SearchCharacter = ({handleSearch}) => {

    const [filteredCharacter, setFilteredCharacter] = useState("")

    const handleChange = (event) => {
        setFilteredCharacter(event.target.value)
        handleSearch(event.target.value)
    }
    
    return ( 
        <>
            <form className='form'>
                <label htmlFor="search"> Filter by Character:</label>
                    <input 
                        placeholder="Search by Character"
                        type="text"
                        value={filteredCharacter}
                        onChange={handleChange}
                        id="search"
                    />
            </form>
        </>
    );
}
export default SearchCharacter;