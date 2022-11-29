import { useState } from "react";




const SearchBar = ({data, setResults}) => {
    const [search, setSearch] = useState("");


    const handleSubmit = (e) =>{
        e.preventDefault();
        let results = data.filter((game) => {return game.name.toLowerCase().includes(search.toLocaleLowerCase())})
        setResults(results);
    }

    const handleClear = () =>{
        setSearch("");
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