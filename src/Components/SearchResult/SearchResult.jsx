import "./SearchResult.css"
const SearchResult = ({game,setGame}) => {
    const handleClick = () => {
        setGame(game);
        window.scrollTo({top:0,left:0,behavior:"smooth"});

    }
    return ( 
        <>
        <div className="title"> {game.name}</div>
        <button onClick ={handleClick}>See Details</button>
        </>
    );
}
 
export default SearchResult;