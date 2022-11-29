const SearchResult = ({game,setGame,graphRef}) => {
    const handleClick = () => {
        setGame(game.name);
        graphRef.current.scrollIntoView({behavior: 'smooth'})

    }
    
    return ( 
        <>
        <div> {game.name}</div>
        <button onClick ={handleClick}>See Details</button>
        </>
    );
}
 
export default SearchResult;