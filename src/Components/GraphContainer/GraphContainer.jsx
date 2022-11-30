import AllGamesGraphs from "../AllGamesGraphs/AllGamesGraphs";
import GameGraph from "../GameGraph/GameGraph";
import "./GraphContainer.css"

const GraphContainer = ({game,data}) => {
    return (
        <div className="graph-container" >
            {game ? (<GameGraph game = {game} data = {data}/>): <AllGamesGraphs data = {data}/>}
        </div>
    )
}
 
export default GraphContainer;