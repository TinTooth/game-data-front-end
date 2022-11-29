import "./Header.css";

const Header = () => {

    const handleClick = () => {
        window.scrollTo({top:0,left:0,behavior:"smooth"});
    }

    return (  
        <div className="header">
           <div className="brand" onClick = {handleClick}>Game Data</div> 
        </div>
    
    );
}
 
export default Header;