import { useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import "./SearchContainer.css";

const SearchContainer = ({data,setGame}) => {
    const [results, setResults] = useState([]);

    return (
        <div className="search-container">
            <SearchBar data={data} setGame = {setGame} setResults = {setResults}/>

        </div>
      );
}
 
export default SearchContainer;