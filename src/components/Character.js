const Character = ({character}) => {

    return ( 
        <div>
            <p>{character.name}</p>
            <img src= {character.imageUrl} alt="character images"/>
            <hr/>
        </div>
     );
}
 
export default Character;