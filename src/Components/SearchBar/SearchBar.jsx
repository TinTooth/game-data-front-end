import { useState } from "react";




const SearchBar = ({data, setGame, setResults}) => {
    const [search, setSearch] = useState("");

    const handleSubmit = (e) =>{
        e.preventDefault();
        setSearch(search);
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