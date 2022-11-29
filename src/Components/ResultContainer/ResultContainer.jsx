import "./ResultContainer.css";
import SearchResult from "../SearchResult/SearchResult";

const ResultContainer = ({results,setGame,noResults,graphRef}) => {
    console.log(noResults);
    return results.length < 1 && noResults === true ? ( 
    <div className="error"> Sorry No Results from that Search</div>  
    ) : <div className="result-container">
        {results.map((game,i) =>{
        return(
            <div className="result" key = {i}>
            <SearchResult game = {game} setGame ={setGame} graphRef = {graphRef}/>     
            </div>
        )
        })}
        {results.length % 2 !== 0 ? (
            <div className="result"/>
        ):null}    
        </div>   
}
export default ResultContainer;