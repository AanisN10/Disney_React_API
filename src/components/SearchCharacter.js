import { useState } from 'react';


const SearchCharacter = ({handleSearch}) => {

    const [filteredCharacter, setFilteredCharacter] = useState("")

    const handleChange = (event) => {
        setFilteredCharacter(event.target.value)
        handleSearch(event.target.value)
    }

    // const handleSubmit = (event) => {
    //     event.preventDefault()
    //     handleSearch(filteredCharacter)
    // }
    
    return ( 
        <>
            <form>
                <label htmlFor="search"> Filter by Character:</label>
                    <input 
                        placeholder="Search by Character"
                        type="text"
                        value={filteredCharacter}
                        onChange={handleChange}
                        id="search"
                    />
                {/* <button type="submit">Submit</button> */}
            </form>
        </>
     );
}
 
export default SearchCharacter;