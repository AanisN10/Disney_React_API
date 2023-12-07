const Character = ({character}) => {

    return ( 
        <div>
            <p>{character.name}</p>
            <img src= {character.imageUrl} alt="character images"/>
            <a href={character.sourceUrl} target="_blank" rel="noopener noreferrer">
                <br/>
                Learn More about the Character
            </a>
            <hr/>
        </div>
    );
}
export default Character;