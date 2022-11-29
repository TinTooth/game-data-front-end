const SearchResult = ({game,setGame}) => {
    const handleClick = () => {
        setGame(game);
    }
    
    return ( 
        <>
        <div> {game.name}</div>
        <button onClick ={handleClick}>See Details</button>
        </>
    );
}
 
export default SearchResult;