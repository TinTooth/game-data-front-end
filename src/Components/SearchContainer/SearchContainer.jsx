import { useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import SearchResult from "../SearchResult/SearchResult";
import "./SearchContainer.css";

const SearchContainer = ({data,setGame}) => {
    const [results, setResults] = useState([]);

    return (
        <div className="search-container">
            <SearchBar data={data} setResults = {setResults}/>
            <div className="result-container">
                {results.map((game,i) =>{
                    return(
                        <div className="result" key = {i}>
                        <SearchResult game = {game} setGame ={setGame}/>     
                        </div>
                    )
                })}    
            </div>   
        </div>
      );
}
 
export default SearchContainer;