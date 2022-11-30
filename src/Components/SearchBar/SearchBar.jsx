import { useState } from "react";
import "./SearchBar.css"



const SearchBar = ({data, setResults, setGame, setNoResults}) => {
    const [search, setSearch] = useState("");


    const handleSubmit = (e) =>{
        
        e.preventDefault();
        let results = data.filter((game) => {return game.name.toLowerCase().includes(search.toLocaleLowerCase())});
        if (results.length > 0) {
            let filteredGames = removeDuplicates(results);
            let sorted = filteredGames.sort((g1, g2) => (g1.name.toLocaleLowerCase() > g2.name.toLocaleLowerCase()) ? 1 : (g1.name.toLocaleLowerCase() < g2.name.toLocaleLowerCase()) ? -1 : 0);
            (setResults(sorted));
            }
        else {
            setNoResults(true);
            setResults([]);
        }
    }

    const removeDuplicates = (games) =>{
        const filteredGames = games.filter((game,i,games) => 
        i === games.findIndex((g) => (
            g.name === game.name)))
        return filteredGames;
    }


    const handleClear = () =>{
        setSearch("");
        setGame("");
        setResults([]);
        setNoResults(false);
    }


    return (
        <div className="search-bar">
        <form onSubmit={handleSubmit}>
            <input type = "text" className="search-input" value={search} onChange ={(e)=> setSearch(e.target.value)} />
            <button type = "submit">Search</button>
        </form>
       
        <button onClick = {handleClear}>Clear</button>
       
        </div>
      );
}
 
export default SearchBar;