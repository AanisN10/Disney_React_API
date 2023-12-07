import Character from "./Character";
const CharacterList = ({characters}) => {

    const mappedCharacters = characters.map((character) => {
        return <Character key = {character.id} character = {character} />
    })

    return (  

        <>
        {mappedCharacters}
        </>
    );
}
export default CharacterList;