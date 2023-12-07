import Character
 from "./Character";
const CharacterList = ({characters}) => {

     const mappedCharacters = characters.map((character) => {
        return <Character key = {character.id} character = {character} />
     })

    return (  

        <>
        <h2> Characters </h2>
        {mappedCharacters}
        </>
    );
}
 
export default CharacterList;