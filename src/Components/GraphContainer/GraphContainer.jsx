import AllGamesGraphs from "../AllGamesGraphs/AllGamesGraphs";
import GameGraph from "../GameGraph/GameGraph";
import "./GraphContainer.css"

const GraphContainer = ({game,data, graphRef}) => {
    return (
        <div className="graph-container" ref = {graphRef} >
            {game ? (<GameGraph game = {game} data = {data}/>): <AllGamesGraphs data = {data}/>}
        </div>
    )
}
 
export default GraphContainer;