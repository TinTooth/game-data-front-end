import { useState} from "react";
import ResultContainer from "../ResultContainer/ResultContainer";
import SearchBar from "../SearchBar/SearchBar";

import "./SearchContainer.css";

const SearchContainer = ({data,setGame}) => {
    const [results, setResults] = useState([]);
    const [noResults, setNoResults] = useState([false]);
    

    return (
        <div className="search-container">
            <SearchBar data={data} setResults = {setResults} setGame = {setGame} setNoResults = {setNoResults}/>
            <ResultContainer setGame = {setGame} noResults = {noResults} results = {results} />
        </div>
      );
}
 
export default SearchContainer;